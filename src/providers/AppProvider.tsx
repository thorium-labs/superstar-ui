import React, { PropsWithChildren } from "react";
import CosmWasmProvider from "./CosmWasmProvider";
import StargateProvider from "./StargateProvider";
import WalletProvider from "./WalletProvider";

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <WalletProvider>
      <StargateProvider>
        <CosmWasmProvider>{children}</CosmWasmProvider>
      </StargateProvider>
    </WalletProvider>
  );
};

export default AppProvider;
