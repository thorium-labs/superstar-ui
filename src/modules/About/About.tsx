import React from "react";
import { useStargate } from "../../providers/StargateProvider";
import { useWallet } from "../../providers/WalletProvider";

const About: React.FC = () => {
  const { balance } = useStargate();

  return (
    <div className="relative">
      <img
        src="assets/orange-ball.png"
        alt="ball"
        className="h-[3rem] w-[3rem] absolute top-[35rem] left-[-1rem] z-20 animate-floating"
      />
      <img
        src="assets/orange-ball.png"
        alt="ball"
        className="h-[4rem] w-[4rem] absolute top-[-3rem] left-[15rem]"
      />
      <img
        src="assets/orange-ball.png"
        alt="ball"
        className="h-[6rem] w-[6rem] absolute bottom-[5rem] left-[4rem] animate-floating"
      />
      <img
        src="assets/orange-ball.png"
        alt="ball"
        className="h-[5rem] w-[5rem] absolute top-[5rem] right-[-4rem] z-20 "
      />
      <img
        src="assets/ss-orange-ball.png"
        alt="ball"
        className="h-[9rem] w-[9rem] absolute top-[-6rem] right-[-2rem] animate-floating"
      />
      <div className="absolute top-[-8rem] left-[-1rem] z-20">
        <img
          src="assets/launch.png"
          alt="ball"
          className="h-[13rem] w-[13rem]  animate-floating "
        />
      </div>
      <img
        src="assets/ss-orange-ball.png"
        alt="ball"
        className="h-[3rem] w-[3rem] absolute bottom-[5rem] right-[5rem] animate-floating"
      />
      <img
        src="assets/orange-ball.png"
        alt="ball"
        className="h-[7rem] w-[7rem] animate-floating absolute bottom-[7rem] right-[-2rem] z-20"
      />
      <div className="flex flex-col gap-4 bg-stone-700/20 backdrop-blur rounded-xl relative mt-36 mb-24">
        <div className="grid grid-cols-2 py-20 px-8 gap-8">
          <h1 className="text-6xl">Why we are better than others?</h1>
          <div>
            <p className="text-stone-400 mt-6">
              <span className="text-ss-orange-500">Super</span>
              <span className="text-orange-500">Star</span> is first of kind
              dexcentralized lottery based on the Cosmos Blockchain. The
              SuperStar system is transparent, fair, and free of any one central
              body waiting to be unleashed. With over 9.9% annual increase in
              popularity, lottery is more popular than ever
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold flex items-center gap-2">
              01
              <span className="w-6 h-[2px] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
            </p>
            <h2 className="text-3xl text-ss-orange-500 font-semibold">
              Lottery
            </h2>
            <p className="text-stone-400">
              A lottery platform built on blockchain technology.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold flex items-center gap-2">
              02
              <span className="w-6 h-[2px] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
            </p>
            <h2 className="text-3xl text-ss-orange-500 font-semibold">
              Smart Contract
            </h2>
            <p className="text-stone-400">
              Autonomous, self-executing technology, that makes human tampering
              impossible.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold flex items-center gap-2">
              03
              <span className="w-6 h-[2px] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
            </p>
            <h2 className="text-3xl text-ss-orange-500 font-semibold">
              Blockchain
            </h2>
            <p className="text-stone-400">
              A decentralized, transparent peer-to-peer system enabled on Cosmos
              Blockchain.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold flex items-center gap-2">
              04
              <span className="w-6 h-[2px] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
            </p>
            <h2 className="text-3xl text-ss-orange-500 font-semibold">
              Random Number Generation
            </h2>
            <p className="text-stone-400">
              Generated numbers are based on a unique and autonomous formula
              that are proven impossible to be manipulated
            </p>
          </div>
        </div>
        <span className="block w-full h-[2px] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="p-4 flex items-center justify-center flex-col mb-24 gap-4">
          <h3 className="text-4xl">In Numbers</h3>
          <p className="max-w-[30rem] text-center text-stone-400">
            <span className="text-ss-orange-500">Super</span>
            <span className="text-orange-500">Star</span> is first of kind
            dexcentralized lottery based on the Cosmos Blockchain. The SuperStar
            system is transparent, fair, and free of any one central body
            waiting to be unleashed.
          </p>
        </div>
        <div className="absolute text-stone-100/80 bottom-[-4rem] bg-gradient-to-tr from-ss-orange-500 to-orange-500 flex gap-12 px-12 py-8 rounded-lg left-0 right-0 mx-auto max-w-fit">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl">23</h3>
            <p className="uppercase font-extrabold text-sm">winners /month</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl">922.876 {balance?.denom.slice(1)}</h3>
            <p className="uppercase font-extrabold text-sm">
              Payouts to winners
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl">2.837</h3>
            <p className="uppercase font-extrabold text-sm">Tickets sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
