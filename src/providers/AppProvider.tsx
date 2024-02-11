import React, { PropsWithChildren } from 'react';
import { ChainProvider } from '@cosmos-kit/react';
import { wallets } from '@cosmos-kit/keplr-extension';
import CosmWasmProvider from './CosmWasmProvider';
import { chains } from '../utils/chains';

import '@interchain-ui/react/styles';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ChainProvider wallets={wallets} assetLists={[]} chains={chains}>
      <CosmWasmProvider>{children}</CosmWasmProvider>
    </ChainProvider>
  );
};

export default AppProvider;
