import React, { PropsWithChildren } from 'react';
import CosmWasmProvider from './CosmWasmProvider';
import WalletProvider from './WalletProvider';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <WalletProvider>
      <CosmWasmProvider>{children}</CosmWasmProvider>
    </WalletProvider>
  );
};

export default AppProvider;
