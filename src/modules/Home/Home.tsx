import React from "react";
import DrawPresent from "./components/DrawPresent";
import HowToPlay from "./components/HowToPlay";
import RecentDrawsCard from "./components/RecentDrawsCard";
import RecentTicketsPurchased from "./components/RecentTicketsPurchasedCard";
import RecentWinnersCard from "./components/RecentWinnersCard";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="header min-h-[5rem] flex items-center">
        <div className="pl-32">
          <h1 className="text-5xl font-semibold ">
            <span>Welcome to </span>
            <span className="text-ss-orange-500">Super</span>
            <span className="text-orange-500">Star</span>
          </h1>
          <h2 className="text-stone-400 text-end">
            A decentralized platform lottery on Osmosis blockchain
          </h2>
        </div>
      </div>
      <DrawPresent />
      <div className="grid grid-cols-4 gap-4 gap-x-8">
        <h2 className="col-span-4 text-3xl">Recent Draws</h2>
        <RecentDrawsCard />
        <RecentDrawsCard />
        <RecentDrawsCard />
        <RecentDrawsCard />
      </div>
      <HowToPlay />
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 text-3xl">Recent Winners</h2>
          <RecentWinnersCard />
          <RecentWinnersCard />
          <RecentWinnersCard />
          <RecentWinnersCard />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 text-3xl">Recent Purchased Tickets</h2>
          <RecentTicketsPurchased />
          <RecentTicketsPurchased />
          <RecentTicketsPurchased />
          <RecentTicketsPurchased />
        </div>
      </div>
    </div>
  );
};

export default Home;
