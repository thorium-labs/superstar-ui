import { Coin, GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useWallet } from "./WalletProvider";

interface StargateState {
  stargateClient: SigningStargateClient;
  balance?: Coin;
  refreshBalance: () => void;
}

export const StargateContext = React.createContext<StargateState | null>(null);

const StargateProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { signer, address, chainInfo } = useWallet();
  const [stargateClient, setStargateClient] = useState<SigningStargateClient>();
  const [balance, setBalance] = useState<Coin>();

  const refreshBalance = useCallback(async () => {
    if (!address) return;
    const balance = await stargateClient?.getBalance(
      address,
      chainInfo.feeToken
    );
    setBalance(balance);
  }, [stargateClient, address, chainInfo]);

  useEffect(() => {
    if (!signer || !address) return;
    const loadClient = async () => {
      const client = await SigningStargateClient.connectWithSigner(
        chainInfo.rpcUrl,
        signer,
        {
          prefix: chainInfo.bech32Prefix,
          gasPrice: GasPrice.fromString(
            chainInfo.defaultGasPrice + chainInfo.feeToken
          ),
        }
      );
      setStargateClient(client);
    };
    loadClient();
  }, [signer, address]);

  useEffect(() => {
    refreshBalance();
  }, [stargateClient]);

  return (
    <StargateContext.Provider
      value={{
        stargateClient: stargateClient as SigningStargateClient,
        balance,
        refreshBalance,
      }}
    >
      {children}
    </StargateContext.Provider>
  );
};

export const useStargate = () => {
  const context = React.useContext(StargateContext);
  if (!context) throw new Error("Stargate Context Provider is not instanced");
  return context;
};

export default StargateProvider;
