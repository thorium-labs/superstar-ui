import React from "react";
import { IntlAddress } from "../../../utils/intl";

const RecentTicketsPurchased: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-stone-700/60 rounded-lg flex flex-col p-4 gap-2 relative mt-[2rem] z-20 backdrop-blur-sm min-h-[100px] justify-between">
        <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 font-semibold">
          {IntlAddress("cosmos1nv0gx07y395pxfde2p5xyj033w58xrpr5eytzc")}
        </p>
        <div className="flex justify-between px-2">
          <p>x1 Tickets</p>
          <p>#1</p>
        </div>
      </div>
      <img
        src="assets/ss-orange-star-4.png"
        className="absolute w-[4rem] z-10 bottom-0 right-0"
      />
    </div>
  );
};

export default RecentTicketsPurchased;
