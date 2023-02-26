import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { SuperStarQueryService, SuperStartExecuteService } from '../services/superstar';
import { Coin } from '@cosmjs/proto-signing';
import { useChain } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr-extension';
import { wallets as VectisWallets } from '@cosmos-kit/vectis';

interface CosmWasmState {
  executeService: SuperStartExecuteService;
  queryService: SuperStarQueryService;
  balance: Coin;
  chainName: string;
  denom: string;
  address?: string;
  connectWallet: () => void;
  disconnectWallet: () => void;
  refreshBalance: () => void;
}

export const CosmWasmContext = React.createContext<CosmWasmState | null>(null);

const CosmWasmProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [executeService, setExecuteService] = useState<SuperStartExecuteService>();
  const [queryService, setQueryService] = useState<SuperStarQueryService>();
  const [balance, setBalance] = useState<Coin>({ amount: '0', denom: '' });
  const [denom, setDenom] = useState<string>('');
  const { connect, address, chain, getOfflineSignerAmino, disconnect } = useChain(import.meta.env.VITE_CHAIN_NAME);

  useEffect(() => {
    SuperStarQueryService.connect(chain).then(setQueryService);
    const [{ denom }] = chain.fees?.fee_tokens || [];
    setDenom(denom);
  }, []);

  useEffect(() => {
    const loadExecuteService = async () => {
      if (!queryService || !address) return;
      const signer = await getOfflineSignerAmino(chain.chain_id);
      const executeService = await SuperStartExecuteService.connectWithSigner(signer, chain);
      await refreshBalance();
      setExecuteService(executeService);
    };
    loadExecuteService();
  }, [queryService, address]);

  const refreshBalance = useCallback(async () => {
    if (!queryService || !address) return setBalance({ amount: '0', denom });
    const balance = await queryService.getBalance(address, denom);
    setBalance(balance);
  }, [address, queryService, denom]);

  const connectWallet = useCallback(async () => {
    const [KeplrWallet] = keplrWallets;
    const [vectisWallet] = VectisWallets;
    if ((window as any).vectis.version) {
      await connect(vectisWallet.walletName);
    } else {
      await connect(KeplrWallet.walletName);
    }
  }, [connect]);

  return (
    <CosmWasmContext.Provider
      value={
        {
          queryService,
          refreshBalance,
          balance,
          denom,
          address,
          chainName: chain.pretty_name,
          executeService,
          connectWallet,
          disconnectWallet: disconnect
        } as CosmWasmState
      }
    >
      {children}
    </CosmWasmContext.Provider>
  );
};

export const useCosmWasm = () => {
  const context = React.useContext(CosmWasmContext);
  if (!context) throw new Error('CosmWasm Context Provider is not instanced');
  return context;
};

export default CosmWasmProvider;
