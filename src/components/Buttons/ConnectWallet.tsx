import React from 'react';
import { useCosmWasm } from '../../providers/CosmWasmProvider';
import TextOutline from '../TextOutline';
import { amountToNormal } from '../../utils/calculateCoin';
import GradientButton from './GradientButton';

const ConnectWallet: React.FC = () => {
  const { connectWallet, disconnectWallet, address, balance } = useCosmWasm();
  return (
    <>
      {address ? (
        <button className="disconnect-button outline-none relative" onClick={disconnectWallet}>
          <TextOutline className="min-w-[8rem] md:min-w-[9.5rem] text-center gap-5">
            <span>{amountToNormal(balance?.amount || 0)}</span>
            <span className="uppercase">{balance?.denom.slice(1)}</span>
          </TextOutline>
          <span className="disconnect-text opacity-0 absolute bg-ss-bg rounded-[10px] py-1 px-2 top-[2px] left-[2px] transition-all">
            Disconnect
          </span>
        </button>
      ) : (
        <GradientButton onClick={connectWallet} className="min-w-[8rem] md:min-w-[9.5rem]">
          Connect Wallet
        </GradientButton>
      )}
    </>
  );
};

export default ConnectWallet;
