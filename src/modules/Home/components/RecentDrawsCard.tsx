import React from "react";
import { Draw } from "../../../interfaces/lottery.interface";
import { amountToNormal } from "../../../utils/calculateCoin";

const BlackBall: React.FC<{ num: number }> = ({ num }) => {
  return (
    <div className="relative">
      <img src="assets/stone-ball.png" className="w-[2.5rem] h-[2.5rem]" />
      <p className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-lg text-stone-50 font-bold">{num}</p>
    </div>
  );
};

interface Props {
  draw: Draw;
}

const RecentDrawsCard: React.FC<Props> = ({ draw }) => {
  const winners = draw.winners_per_match?.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="flex flex-col items-center gap-2 justify-center rounded-lg bg-gradient-to-tl from-ss-orange-500/80 to-orange-500/80 px-2 pb-4 relative mt-8">
      <div className="flex justify-between w-full">
        <div className="p-4">
          <img src="assets/ss-orange-trophy-3.png" className="w-[5rem] absolute top-2 left-2" />
          <img src="assets/coin-7.png" className="h-[2rem] absolute top-[-2rem] left-[3rem] animate-floating" />
          <img src="assets/coin-front.png" className="h-[1.8rem] absolute top-[-0.2rem] left-[2.5rem] " />
          <img src="assets/coin-5.png" className="h-[1.5rem] absolute top-[-1rem] left-[1.5rem] rotate-360" />
          <p className="draw-number text-lg font-bold text-stone-900 uppercase text-center absolute ">#{draw.id}</p>
        </div>
        <p className="text-sm font-bold text-stone-900 uppercase p-2 text-center">Dec 19, 2022</p>
      </div>
      <div className="flex flex-col justify-end pb-4 self-end w-[70%] items-center font-bold">
        <h4 className="text-4xl">{amountToNormal(draw.total_prize.amount)}</h4>
        <p className="uppercase text-stone-900">{draw.ticket_price.denom.slice(1)}</p>
      </div>
      <div className="flex w-full items-center justify-center">
        {[...(draw.winner_number as string)].map((num, i) => (
          <BlackBall key={draw.id + "_number_" + i} num={parseInt(num)} />
        ))}
      </div>
      <div className="w-full min-h-[rem] relative">
        <div className="w-full flex justify-between px-2 uppercase mt-2">
          <p>Tickets sold</p>
          <p>{draw.total_tickets}</p>
        </div>
        <div className="w-full flex justify-between px-2 uppercase ">
          <p>Winners</p>
          <p>{winners}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentDrawsCard;
