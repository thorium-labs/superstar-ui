import React from "react";

const RecentDrawsCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center rounded-lg bg-gradient-to-tl from-ss-orange-500/80 to-orange-500/80 relative px-2 pb-4">
      <div className="flex justify-between w-full">
        <p className="text-sm font-bold text-stone-900 uppercase p-2 text-center">
          Dec 19, 2022
        </p>
        <p className="text-sm font-bold text-stone-900 uppercase p-2 text-center">
          #1
        </p>
      </div>
      <h4 className="text-4xl font-bold pb-4">1.278 OSMO</h4>
      <div className="flex w-full">
        <div
          className={`relative w-[3rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
        <div
          className={`relative w-[2.5rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
        <div
          className={`relative w-[2.5rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
        <div
          className={`relative w-[2.5rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
        <div
          className={`relative w-[2.5rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
        <div
          className={`relative w-[2.5rem] flex items-center justify-center rounded-full`}
        >
          <img src={`/assets/stone-ball.png`} className="w-[2.5rem]" />

          <span
            className={`absolute text-md font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            3
          </span>
        </div>
      </div>
      <div className="w-full min-h-[rem] relative">
        <div className="w-full flex justify-between px-2 uppercase mt-2">
          <p>Tickets sold</p>
          <p>10240</p>
        </div>
        <div className="w-full flex justify-between px-2 uppercase ">
          <p>Winners</p>
          <p>65</p>
        </div>
      </div>
    </div>
  );
};

export default RecentDrawsCard;
