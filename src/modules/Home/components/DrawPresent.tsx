import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarsButton from '../../../components/Buttons/StarsButton';
import { Draw } from '../../../interfaces/lottery.interface';
import { useWallet } from '../../../providers/WalletProvider';
import { amountToNormal } from '../../../utils/calculateCoin';
import { calculateTimeLeft, initTimerValues, timerState } from '../../../utils/calculateTimeLeft';

interface Props {
  draw?: Draw;
}

const DrawPresent: React.FC<Props> = ({ draw }) => {
  const { chainInfo } = useWallet();
  const [timeLeft, setTimeLeft] = React.useState<timerState>(initTimerValues);
  const navigate = useNavigate();

  useEffect(() => {
    if (!draw) return;
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(new Date(+(draw?.end_time as { at_time: string }).at_time / 1e6))), 1000);
    return () => clearInterval(timer);
  }, [draw]);

  return (
    <div className="relative w-full min-h-[160px] mt-[2rem] mb-[3rem]">
      <div className="py-4 px-12 rounded-xl bg-stone-700/20 backdrop-blur w-full mx-auto flex gap-4 items-center justify-between min-h-[10rem] absolute z-20">
        <div className="min-w-[200px] flex flex-col items-center gap-2">
          <div className="flex items-center justify-center flex-col">
            <p className="text-4xl font-extrabold">{amountToNormal(draw?.total_prize.amount || 0)}</p>
            <p className="text-center uppercase">{chainInfo.feeToken.slice(1)}</p>
          </div>
        </div>
        <span className="w-[2px] h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="grid grid-cols-3 items-center justify-center">
          <div className="flex items-center justify-center gap-2 col-span-3">
            <p className="text-center text-lg">Next draw </p>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-ss-orange-500 font-extrabold text-2xl">
              #{draw?.id}
            </span>
          </div>
          {draw?.status === 'pending' ? (
            <div className="col-span-3 flex justify-center items-center min-h-[4.25rem] text-lg gap-2 font-semibold">
              Pending... <img className="animate-spin-slow h-[2.5rem] w-[2.5rem]" src="/assets/coin-front.png" />
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
        <span className="w-[2px] h-[6rem] bg-gradient-to-bl from-ss-orange-500 to-orange-500 rounded-lg" />
        <div className="min-w-[200px] flex items-center justify-center">
          <StarsButton onClick={() => navigate('/ticket')}>Play now</StarsButton>
        </div>
      </div>
      <img src="/assets/orange-ball.png" className="w-[7rem] absolute top-[-3rem] left-[-2.5rem] animate-floating-2" />
      <img src="/assets/ss-orange-star-front.png" className="w-[3rem] absolute top-[1rem] left-[6rem]" />
      <img src="/assets/ss-orange-star-front.png" className="w-[2.5rem] absolute top-[1rem] left-[6rem]" />
      <img src="/assets/ss-orange-star-1.png" className="w-[5rem] absolute top-[8rem] left-[0rem] z-30" />
      <img src="/assets/orange-star-front.png" className="w-[5rem] absolute top-[1rem] left-[35%] rotate-45" />
      <img src="/assets/stone-ball.png" className="w-[4rem] absolute top-[8rem] left-[35%] z-30" />
      <img src="/assets/orange-star-4.png" className="w-[3rem] absolute top-[7rem] right-[33%] z-30 animate-floating" />
      <img src="/assets/ss-orange-star-3.png" className="w-[5rem] absolute top-[-3rem] right-[20%]" />
      <img src="/assets/ss-orange-ball.png" className="w-[5rem] absolute top-[7rem] right-[1rem] animate-floating-2" />
    </div>
  );
};

export default DrawPresent;
