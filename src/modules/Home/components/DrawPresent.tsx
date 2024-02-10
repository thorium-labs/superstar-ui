import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarsButton from '../../../components/Buttons/StarsButton';
import { Draw } from '../../../interfaces/lottery.interface';
import { useCosmWasm } from '../../../providers/CosmWasmProvider';
import { amountToNormal } from '../../../utils/calculateCoin';
import { calculateTimeLeft, initTimerValues, timerState } from '../../../utils/calculateTimeLeft';

interface Props {
  draw?: Draw;
}

const DrawPresent: React.FC<Props> = ({ draw }) => {
  const { denom } = useCosmWasm();
  const [timeLeft, setTimeLeft] = React.useState<timerState>(initTimerValues);
  const navigate = useNavigate();

  useEffect(() => {
    if (!draw) return;
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(new Date(+(draw?.end_time as { at_time: string }).at_time / 1e6))), 1000);
    return () => clearInterval(timer);
  }, [draw]);

  return (
    <div className="relative w-full min-h-[160px] mt-[2rem] mb-[3rem]">
      <div className="py-4 lg:px-12 rounded-xl flex-col md:flex-row bg-stone-700/20 backdrop-blur w-full mx-auto flex gap-4 items-center justify-between min-h-[10rem] relative z-20">
        <div className="min-w-[200px] flex flex-col items-center gap-2 py-8 md:py-0">
          <div className="flex items-center justify-center flex-col">
            <p className="text-4xl font-extrabold">{amountToNormal(draw?.total_prize.amount || 0)}</p>
            <p className="text-center uppercase">{denom.slice(1)}</p>
          </div>
        </div>
        <span className="w-[80%] h-[2px] md:w-[2px] md:h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="grid grid-cols-3 items-center justify-center py-8 md:py-0">
          <div className="flex items-center justify-center gap-2 col-span-3">
            <p className="text-center text-lg">Next draw </p>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-ss-orange-500 font-extrabold text-2xl">
              #{draw?.id}
            </span>
          </div>
          {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
            <div className="col-span-3 flex justify-center items-center min-h-[4.25rem] text-lg gap-2 font-semibold">
              <img className="animate-spin-slow h-[2.5rem] w-[2.5rem]" src="/assets/coin-front.png" />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
        <span className="w-[80%] h-[2px] md:w-[2px] md:h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="min-w-[200px] flex items-center justify-center py-8 md:py-0">
          <StarsButton onClick={() => navigate('/ticket')}>Play now</StarsButton>
        </div>
      </div>
      <img
        src="/assets/orange-ball.png"
        className="w-[5rem] md:w-[7rem] absolute top-[-3rem] left-[-1rem] md:left-[-2.5rem] animate-floating-2 "
      />
      <img src="/assets/ss-orange-star-front.png" className="w-[3rem] absolute top-[19rem] md:top-[1rem] left-[2rem] md:left-[6rem] " />
      <img src="/assets/ss-orange-star-front.png" className="w-[2.5rem] absolute top-[0.5rem] md:top-[1rem] md:left-[6rem] left-[3rem] " />
      <img src="/assets/ss-orange-star-1.png" className="w-[5rem] absolute top-[13rem] md:top-[8rem] md:left-[0rem] left-[-1rem] z-30 " />
      <img src="/assets/orange-star-front.png" className="w-[5rem] absolute top-[10rem] md:top-[1rem] left-[75%] md:left-[35%] rotate-45" />
      <img
        src="/assets/stone-ball.png"
        className="w-[4rem] absolute bottom-[-2rem] md:top-[8rem] md:bottom-auto md:left-[35%] left-[15%] z-30 "
      />
      <img
        src="/assets/orange-star-4.png"
        className="w-[3rem] absolute bottom-[7rem] md:top-[7rem] md:right-[33%] right-[13%] z-30 animate-floating "
      />
      <img src="/assets/ss-orange-star-3.png" className="w-[5rem] absolute top-[-2.5rem] md:top-[-3rem] right-[10%] md:right-[20%] " />
      <img
        src="/assets/ss-orange-ball.png"
        className="w-[5rem] absolute bottom-[1rem] md:top-[7rem] md:bottom-auto right-[1rem] animate-floating-2  "
      />
    </div>
  );
};

export default DrawPresent;
