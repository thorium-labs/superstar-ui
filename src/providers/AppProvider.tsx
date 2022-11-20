import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { createSignClient } from "../services/cosmwasm";
import { chainsConfig } from "../utils/chainsConfig";
import { configKeplr } from "../utils/configKeplr";

interface AppContextValue {
  clientAddr: string | null;
  setClientAddr: (addr: string) => void;
  connectWallet: () => void;
  disconnectWallet: () => void;
  chain?: string;
  changeChain: (chain: string) => void;
}

export const AppContext = React.createContext<AppContextValue | null>(null);

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [clientAddr, setClientAddr] = useState<string | null>(null);
  const [client, setClient] = useState<SigningCosmWasmClient | null>(null);
  const [allowPermission, setAllowPermission] =
    useLocalStorage<boolean>("allowPermission");
  const [chain, setChain] = useLocalStorage("chain", "uni-5");

  const connectWallet = async () => {
    if (!chain) return;

    //const config = chainsConfig[chain as keyof typeof chainsConfig];
    const config = chainsConfig["juno_testnet" as keyof typeof chainsConfig];

    console.log(config);
    try {
      await window.keplr?.enable(chain);
    } catch (err) {
      await window.keplr?.experimentalSuggestChain(configKeplr(config));
      await window.keplr?.enable(chain);
    }
    const signer = window.keplr?.getOfflineSigner(chain);
    if (!signer) return;
    const client = await createSignClient(signer, config);
    const [{ address }] = await signer.getAccounts();
    setClient(client);
    setClientAddr(address);
    setAllowPermission(true);
  };

  const changeChain = (chain: string) => {
    if (!chain) return;
    setChain(chain);
  };

  const disconnectWallet = () => {
    setClient(null);
    setClientAddr(null);
    setAllowPermission(false);
  };

  useEffect(() => {
    if (!allowPermission) return;
    connectWallet();
  }, []);

  return (
    <AppContext.Provider
      value={{
        clientAddr,
        setClientAddr,
        connectWallet,
        chain,
        changeChain,
        disconnectWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("App Context Provider is not instanced");
  return context;
};

export default AppProvider;
