import React from "react";
import { IntlAddress } from "../../../utils/intl";

const RecentWinnersCard: React.FC = () => {
  return (
    <div className="bg-stone-700/60 rounded-lg flex flex-col p-4 gap-2 relative mt-[2rem] min-h-[100px]">
      <div className="absolute right-[1rem] top-[-2rem]">
        <img
          src="assets/ss-orange-star-front.png"
          alt="star"
          className="w-[5rem]"
        />
        <p className="absolute left-0 right-0 top-[0] bottom-0 m-auto text-center text-stone-900 font-bold flex items-center justify-center">
          #1
        </p>
      </div>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 text-2xl font-semibold">
        12.4 OSMO
      </p>
      <p className="text-sm">
        {IntlAddress("cosmos1nv0gx07y395pxfde2p5xyj033w58xrpr5eytzc")}
      </p>
    </div>
  );
};

export default RecentWinnersCard;
