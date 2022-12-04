import React from "react";
import { Winner } from "../../../interfaces/indexer.interface";
import { amountToNormal } from "../../../utils/calculateCoin";
import { IntlAddress } from "../../../utils/intl";

interface Props {
  winner: Winner;
}

const RecentWinnersCard: React.FC<Props> = ({ winner }) => {
  const [amount] = winner.prize.match(/\d*/g) as string[];
  const [denom] = winner.prize.match(/\D*/g) as string[];
  return (
    <div className="bg-stone-700/60 rounded-lg flex flex-col p-4 gap-2 relative mt-[2rem] min-h-[100px]">
      <div className="absolute right-[1rem] top-[-2rem]">
        <img src="assets/ss-orange-star-front.png" alt="star" className="w-[5rem]" />
        <p className="absolute left-0 right-0 top-[0] bottom-0 m-auto text-center text-stone-900 font-bold flex items-center justify-center">
          #{winner.drawId}
        </p>
      </div>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-2xl font-semibold">
        {amountToNormal(amount)} {denom}
      </p>
      <p className="text-sm">{IntlAddress(winner.id)}</p>
    </div>
  );
};

export default RecentWinnersCard;
