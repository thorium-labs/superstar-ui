import React, { useEffect, useState } from "react";
import { useCosmWasm } from "../../providers/CosmWasmProvider";
import DrawPresent from "./components/DrawPresent";
import HowToPlay from "./components/HowToPlay";
import RecentDrawsCard from "./components/RecentDrawsCard";
import RecentTicketsPurchased from "./components/RecentTicketsPurchasedCard";
import RecentWinnersCard from "./components/RecentWinnersCard";
import { Draw } from "../../interfaces/lottery.interface";
import { getRecentPurchases, getRecentWinners } from "../../services/indexer";
import { Purchase, Winner } from "../../interfaces/indexer.interface";
import "./Home.css";

const Home: React.FC = () => {
  const { getLastDraws, getCurrentDraw } = useCosmWasm();
  const [lastDraw, setLastDraw] = useState<Draw>();
  const [recentDraws, setRecentDraws] = useState<Draw[]>([]);
  const [recentTickets, setRecentTickets] = useState<Purchase[]>([]);
  const [recentWinners, setRecentWinners] = useState<Winner[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const draw = await getCurrentDraw();
      if (!draw) return;
      setLastDraw(draw);

      const draws = await getLastDraws(draw?.id - 1, 4);
      setRecentDraws(draws);
    };

    fetchData();
  }, [getLastDraws, getCurrentDraw]);

  useEffect(() => {
    getRecentPurchases(4).then(setRecentTickets);
    getRecentWinners(4).then(setRecentWinners);
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <div className="header min-h-[5rem] flex items-center">
        <div className="pl-32">
          <h1 className="text-5xl font-semibold ">
            <span>Welcome to </span>
            <span className="text-ss-orange-500">Super</span>
            <span className="text-orange-500">Star</span>
          </h1>
          <h2 className="text-stone-400 text-end">A decentralized platform lottery on Osmosis blockchain</h2>
        </div>
      </div>
      <DrawPresent draw={lastDraw} />
      <div className="grid grid-cols-4 gap-4 gap-x-8">
        <h2 className="col-span-4 text-3xl">Recent Draws</h2>
        {recentDraws.map((draw) => (
          <RecentDrawsCard key={draw.id} draw={draw} />
        ))}
      </div>
      <HowToPlay />
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 text-3xl">Recent Winners</h2>
          {recentWinners.map((winner, i) => (
            <RecentWinnersCard key={winner.prize + i} winner={winner} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <h2 className="col-span-2 text-3xl">Recent Purchased Tickets</h2>
          {recentTickets.map((purchase, i) => (
            <RecentTicketsPurchased key={purchase.buyer + i} purchase={purchase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
