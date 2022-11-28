import React from "react";
import StarsButton from "../../../components/Buttons/StarsButton";
import { useWallet } from "../../../providers/WalletProvider";

const DrawPresent: React.FC = () => {
  const { chainInfo } = useWallet();
  return (
    <div className="relative w-full min-h-[160px] mt-[2rem] mb-[10rem]">
      <div className="py-4 px-12 rounded-xl bg-stone-700/20 backdrop-blur w-full mx-auto flex gap-4 items-center justify-between min-h-[10rem] absolute z-20">
        <div className="min-w-[200px] flex flex-col items-center gap-2">
          <div>
            <p className="text-4xl font-extrabold">40.456</p>
            <p className="text-center uppercase">
              {chainInfo.feeToken.slice(1)}
            </p>
          </div>
        </div>
        <span className="w-[2px] h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="grid grid-cols-3 items-center justify-center">
          <p className="text-center col-span-3 text-lg">Next draw</p>
          <div className="p-2 text-center">
            <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">20</p>
            <p className="text-stone-400 uppercase text-xs">hours</p>
          </div>
          <div className="p-2 text-center">
            <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">20</p>
            <p className="text-stone-400 uppercase text-xs">minutes</p>
          </div>
          <div className="p-2 text-center">
            <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">20</p>
            <p className="text-stone-400 uppercase text-xs">seconds</p>
          </div>
        </div>
        <span className="w-[2px] h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="min-w-[200px] flex items-center justify-center">
          <StarsButton>Play now</StarsButton>
        </div>
      </div>
      <img
        src="/assets/orange-ball.png"
        className="w-[7rem] absolute top-[-3rem] left-[-2.5rem] animate-floating"
      />
      <img
        src="/assets/ss-orange-star-front.png"
        className="w-[3rem] absolute top-[1rem] left-[6rem]"
      />
      <img
        src="/assets/ss-orange-star-front.png"
        className="w-[2.5rem] absolute top-[1rem] left-[6rem]"
      />
      <img
        src="/assets/ss-orange-star-1.png"
        className="w-[5rem] absolute top-[8rem] left-[0rem] z-30"
      />
      <img
        src="/assets/orange-star-front.png"
        className="w-[5rem] absolute top-[1rem] left-[35%] rotate-45"
      />
      <img
        src="/assets/stone-ball.png"
        className="w-[4rem] absolute top-[8rem] left-[35%] z-30"
      />
      <img
        src="/assets/orange-star-4.png"
        className="w-[3rem] absolute top-[7rem] right-[33%] z-30 animate-floating"
      />
      <img
        src="/assets/ss-orange-star-3.png"
        className="w-[5rem] absolute top-[-3rem] right-[20%]"
      />
      <img
        src="/assets/ss-orange-ball.png"
        className="w-[5rem] absolute top-[7rem] right-[1rem] animate-floating"
      />
    </div>
  );
};

export default DrawPresent;
