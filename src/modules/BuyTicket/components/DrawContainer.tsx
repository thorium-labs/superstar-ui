import React, { useEffect, useState } from "react";
import { Draw } from "../../../interfaces/lottery.interface";
import { useStargate } from "../../../providers/StargateProvider";
import { amountToNormal } from "../../../utils/calculateCoin";
import { calculateTimeLeft, initTimerValues, timerState } from "../../../utils/calculateTimeLeft";

const DrawContainer: React.FC<{ draw: Draw }> = ({ draw }) => {
  const { balance } = useStargate();
  const [timeLeft, setTimeLeft] = React.useState<timerState>(initTimerValues);

  useEffect(() => {
    if (!draw) return;
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(new Date(+(draw?.end_time as { at_time: string }).at_time / 1e6))), 1000);
    return () => clearInterval(timer);
  }, [draw]);

  return (
    <div className="relative mt-10 mb-16 mx-auto ">
      <div className="rounded-xl  flex items-center justify-center gap-8 bg-stone-700/30 backdrop-blur-sm px-8 relative z-20">
        <div className="max-w-[35%] flex flex-col items-center justify-between gap-4 p-4 min-h-[15rem] pl-8">
          <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
            Draw #{draw?.id}
          </p>
          {draw?.status === "pending" ? (
            <div className="col-span-3 flex justify-center items-center min-h-[4.25rem] text-lg gap-2 font-semibold min-w-[12.6rem]">
              Pending... <img className="animate-spin-slow h-[2.5rem] w-[2.5rem]" src="/assets/coin-front.png" />
            </div>
          ) : (
            <div className="grid grid-cols-3">
              <div className="p-2 text-center">
                <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">{timeLeft.hours}</p>
                <p className="text-stone-400 uppercase text-xs">hours</p>
              </div>
              <div className="p-2 text-center">
                <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">{timeLeft.minutes}</p>
                <p className="text-stone-400 uppercase text-xs">minutes</p>
              </div>
              <div className="p-2 text-center">
                <p className="font-bold bg-stone-900 rounded-xl py-2 text-lg">{timeLeft.seconds}</p>
                <p className="text-stone-400 uppercase text-xs">seconds</p>
              </div>
            </div>
          )}
          <div className="flex gap-2 flex-col w-full">
            <div className="flex justify-between w-full uppercase">
              <p>Nº tickets sold</p>
              <p>{draw?.total_tickets}</p>
            </div>
          </div>
        </div>
        <span className="block w-[2px] h-[5rem] bg-stone-400" />
        <div className="max-w-[60%] min-h-[15rem] flex-1 p-4">
          <div className="flex items-center justify-center gap-4 w-full">
            <h6 className="text-xl">POT</h6>
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-center">
              {amountToNormal(draw?.total_prize.amount)}
            </h3>
            <h6 className="text-xl">{balance?.denom.slice(1)}</h6>
          </div>
          <div className="w-full grid grid-cols-3 mt-4 gap-4">
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <div className="flex items-center justify-center flex-col" key={`matchContainer${i}`}>
                  <h6 className="text-stone-400 text-xs">Do {i + 1} Matches</h6>
                  <div className="flex mt-2 gap-1">
                    {Array.from({ length: 6 }).map((_, indexBall) => {
                      return (
                        <React.Fragment key={"balls_" + indexBall}>
                          {indexBall <= i ? (
                            <img src="assets/orange-ball.png" className="w-[1.2rem]" />
                          ) : (
                            <img src="assets/stone-ball.png" className="w-[1.2rem]" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <p className="text-lg font-semibold">
                    {amountToNormal(draw?.prize_per_match?.[i] as string)} {balance?.denom.slice(1)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img src="assets/coin-4.png" className="h-[3rem] absolute top-[-1.5rem] left-[-1.5rem] animate-floating-2" />
      <img src="assets/coin-6.png" className="h-[2.5rem] absolute top-[1.5rem] left-[1rem] " />
      <img src="assets/coin-3.png" className="h-[2rem] absolute top-[7rem] left-[1rem] z-30" />
      <img src="assets/coin-6.png" className="h-[3rem] absolute top-[4rem] left-[-1rem] " />
      <img src="assets/orange-trophy-2.png" className="h-[5rem] absolute bottom-[1rem] left-[-1.5rem] z-30" />
    </div>
  );
};

export default DrawContainer;
