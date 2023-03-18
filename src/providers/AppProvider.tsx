import React, { PropsWithChildren, useMemo } from 'react';
import { ChainProvider } from '@cosmos-kit/react-lite';
import { wallets as VectisWallet } from '@cosmos-kit/vectis';
import { wallets as KeplrWallet } from '@cosmos-kit/keplr-extension';
import CosmWasmProvider from './CosmWasmProvider';
import { chains } from '../utils/chains';
import ModalWallet from '../components/ModalWallet/ModalWallet';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ChainProvider
      wallets={[...VectisWallet, ...KeplrWallet]}
      assetLists={[]}
      chains={chains as any}
      walletModal={(props) => <ModalWallet {...props} />}
    >
      <CosmWasmProvider>{children}</CosmWasmProvider>
    </ChainProvider>
  );
};

export default AppProvider;
