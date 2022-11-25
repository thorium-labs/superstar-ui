import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useWallet } from "./WalletProvider";

interface CosmWasmState {
  cosmWasmClient: SigningCosmWasmClient;
}

export const CosmWasmContext = React.createContext<CosmWasmState | null>(null);

const CosmWasmProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { signer, address, chainInfo } = useWallet();
  const [cosmWasmClient, setCosmWasmClient] = useState<SigningCosmWasmClient>();

  useEffect(() => {
    if (!signer || !address) return;
    const loadClient = async () => {
      const client = await SigningCosmWasmClient.connectWithSigner(
        chainInfo.rpcUrl,
        signer,
        {
          prefix: chainInfo.bech32Prefix,
          gasPrice: GasPrice.fromString(
            chainInfo.defaultGasPrice + chainInfo.feeToken
          ),
        }
      );
      client;
      setCosmWasmClient(client);
    };
    loadClient();
  }, [signer, address]);

  return (
    <CosmWasmContext.Provider
      value={{
        cosmWasmClient: cosmWasmClient as SigningCosmWasmClient,
      }}
    >
      {children}
    </CosmWasmContext.Provider>
  );
};

export const useCosmWasm = () => {
  const context = React.useContext(CosmWasmContext);
  if (!context) throw new Error("CosmWasm Context Provider is not instanced");
  return context;
};

export default CosmWasmProvider;
