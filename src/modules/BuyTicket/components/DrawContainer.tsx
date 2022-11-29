import React from "react";

const DrawContainer: React.FC = () => {
  return (
    <div className="relative mt-10 mb-16 mx-auto ">
      <div className="rounded-xl  flex items-center justify-center gap-8 bg-stone-700/30 backdrop-blur-sm px-8 relative z-20">
        <div className="max-w-[35%] flex flex-col items-center justify-between gap-4 p-4 min-h-[15rem] pl-8">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
            Draw #1
          </p>
          <div className="grid grid-cols-3 items-center justify-center">
            <div className="p-2 text-center">
              <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">
                20
              </p>
              <p className="text-stone-400 uppercase text-xs">hours</p>
            </div>
            <div className="p-2 text-center">
              <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">
                20
              </p>
              <p className="text-stone-400 uppercase text-xs">minutes</p>
            </div>
            <div className="p-2 text-center">
              <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">
                20
              </p>
              <p className="text-stone-400 uppercase text-xs">seconds</p>
            </div>
          </div>
          <div className="flex gap-2 flex-col w-full">
            <div className="flex justify-between w-full uppercase">
              <p>Nº tickets sold</p>
              <p>233</p>
            </div>
          </div>
        </div>
        <span className="block w-[2px] h-[5rem] bg-stone-400" />
        <div className="max-w-[60%] min-h-[15rem] flex-1 p-4">
          <div className="flex items-center justify-center gap-4 w-full">
            <h6 className="text-xl">POT</h6>
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-center">
              92.444
            </h3>
            <h6 className="text-xl">OSMO</h6>
          </div>
          <div className="w-full grid grid-cols-3 mt-4 gap-4">
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 6 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">36977,6 OSMO</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 5 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">27 344,3 OSMO</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 4 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">21259,6 OSMO</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 3 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">10167,63 OSMO</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 2 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">6470,31 OSMO</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h6 className="text-stone-400 text-xs">Do 6 Matches</h6>
              <div className="flex mt-2 gap-1">
                <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                <img src="assets/stone-ball.png" className="w-[1.2rem]" />
              </div>
              <p className="text-lg font-semibold">47621,65 OSMO</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/coin-4.png"
        className="h-[3rem] absolute top-[-1.5rem] left-[-1.5rem] animate-floating-2"
      />
      <img
        src="assets/coin-6.png"
        className="h-[2.5rem] absolute top-[1.5rem] left-[1rem] "
      />
      <img
        src="assets/coin-3.png"
        className="h-[2rem] absolute top-[7rem] left-[1rem] z-30"
      />
      <img
        src="assets/coin-6.png"
        className="h-[3rem] absolute top-[4rem] left-[-1rem] "
      />
      <img
        src="assets/orange-trophy-2.png"
        className="h-[5rem] absolute bottom-[1rem] left-[-1.5rem] z-30"
      />
    </div>
  );
};

export default DrawContainer;
