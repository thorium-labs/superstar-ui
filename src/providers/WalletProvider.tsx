import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { getSigner, loadKeplr } from "../services/keplr";
import { Chain, chainsConfig } from "../utils/chainsConfig";

interface WalletState {
  chainInfo: Chain;
  address?: string;
  signer?: OfflineSigner;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

export const WalletContext = React.createContext<WalletState | null>(null);
const chainInfo = chainsConfig["osmosis_testnet"];

const WalletProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [address, setAddress] = useState<string>();
  const [signer, setSigner] = useState<OfflineSigner>();
  const [allowPermission, setAllowPermission] =
    useLocalStorage<boolean>("allowPermission");

  const connectWallet = async () => {
    const { chainId } = chainInfo;
    await loadKeplr(chainId);

    const signer = await getSigner(chainId);
    if (!signer) return;
    setSigner(signer);

    const [{ address }] = await signer.getAccounts();
    setAddress(address);

    setAllowPermission(true);
  };

  const disconnectWallet = () => {
    setAddress(undefined);
    setSigner(undefined);
    setAllowPermission(false);
  };

  useEffect(() => {
    if (!allowPermission) return;
    connectWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        chainInfo,
        address,
        signer,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = React.useContext(WalletContext);
  if (!context) throw new Error("Wallet Context Provider is not instanced");
  return context;
};

export default WalletProvider;
