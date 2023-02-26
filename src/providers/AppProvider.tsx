import React, { PropsWithChildren } from 'react';
import { ChainProvider } from '@cosmos-kit/react';
import { wallets as VectisWallet } from '@cosmos-kit/vectis';
import { wallets as KeplrWallet } from '@cosmos-kit/keplr-extension';
import { chains, assets } from 'chain-registry';
import CosmWasmProvider from './CosmWasmProvider';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ChainProvider wallets={[...VectisWallet, ...KeplrWallet]} assetLists={assets} chains={chains}>
      <CosmWasmProvider>{children}</CosmWasmProvider>
    </ChainProvider>
  );
};

export default AppProvider;
