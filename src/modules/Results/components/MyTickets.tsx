import React, { useEffect, useState } from 'react';
import { GradientButton } from '../../../components/Buttons';
import { Draw } from '../../../interfaces/lottery.interface';
import { useCosmWasm } from '../../../providers/CosmWasmProvider';
import { useWallet } from '../../../providers/WalletProvider';

const MyTickets: React.FC = () => {
  const { getCurrentDraw } = useCosmWasm();
  const { connectWallet, address } = useWallet();
  const [currentDraw, setCurrentDraw] = useState<Draw>();

  useEffect(() => {
    getCurrentDraw().then(setCurrentDraw);
  }, [getCurrentDraw]);

  if (!address) {
    return (
      <div className="min-h-[10rem] w-full flex items-center justify-center flex-col gap-4">
        <p className="text-stone-400">Please, connect your wallet to see your information</p>
        <GradientButton className="text-2xl" onClick={connectWallet}>
          Connect
        </GradientButton>
      </div>
    );
  }

  return <div className="flex flex-col w-full gap-8 my-12"></div>;
};

export default MyTickets;
