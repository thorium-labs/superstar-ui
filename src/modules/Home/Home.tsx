import React, { useEffect, useState } from 'react';
import { useCosmWasm } from '../../providers/CosmWasmProvider';
import DrawPresent from './components/DrawPresent';
import HowToPlay from './components/HowToPlay';
import RecentDrawsCard from './components/RecentDrawsCard';
import RecentTicketsPurchased from './components/RecentTicketsPurchasedCard';
import RecentWinnersCard from './components/RecentWinnersCard';
import { Draw } from '../../interfaces/lottery.interface';
import { getRecentPurchases, getRecentWinners } from '../../services/indexer';
import { Purchase, Winner } from '../../interfaces/indexer.interface';
import './Home.css';
import useMediaQuery from '../../hooks/useMediaQuery';

const Home: React.FC = () => {
  const { queryService, chainName } = useCosmWasm();
  const isLg = useMediaQuery('lg');
  const isMd = useMediaQuery('md');
  const isSm = useMediaQuery('sm');
  const [lastDraw, setLastDraw] = useState<Draw>();
  const [recentDraws, setRecentDraws] = useState<Draw[]>([]);
  const [recentTickets, setRecentTickets] = useState<Purchase[]>([
    {
      id: '1',
      drawId: '1333',
      buyer: 'juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq',
      tickets: 3
    },
    {
      id: '2',
      drawId: '1333',
      buyer: 'juno1f49xq0rmah39sk58aaxq6gnqcvupee7jgl90tn',
      tickets: 1
    },
    {
      id: '3',
      drawId: '1333',
      buyer: 'juno17a8smrhauph552zkz5864vjafz9pszpeus3ftf',
      tickets: 7
    },
    {
      id: '4',
      drawId: '1332',
      buyer: 'juno1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5',
      tickets: 15
    }
  ]);
  const [recentWinners, setRecentWinners] = useState<Winner[]>([
    {
      id: '1',
      drawId: '1333',
      winner: 'juno1h6y8tkceau4d8zyv5aa0fwdj2pa2y0gz2hx0tq',
      prize: '1000000ujuno'
    },
    {
      id: '2',
      drawId: '1333',
      winner: 'juno1f49xq0rmah39sk58aaxq6gnqcvupee7jgl90tn',
      prize: '5000000ujuno'
    },
    {
      id: '3',
      drawId: '1333',
      winner: 'juno17a8smrhauph552zkz5864vjafz9pszpeus3ftf',
      prize: '3000000ujuno'
    },
    {
      id: '4',
      drawId: '1332',
      winner: 'juno1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5',
      prize: '9000000ujuno'
    }
  ]);

  useEffect(() => {
    if (!queryService) return;
    const fetchData = async () => {
      const draw = await queryService.getCurrentDraw();
      if (!draw) return;
      setLastDraw(draw);

      const draws = await queryService.getLastDraws(draw?.id - 1, 4);
      setRecentDraws(draws);
    };

    fetchData();
  }, [queryService]);

  useEffect(() => {
    // getRecentPurchases(4).then(setRecentTickets);
    // getRecentWinners(4).then(setRecentWinners);
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <div className="header min-h-[20rem] md:min-h-[15rem] flex items-center">
        <div className="p-4 md:pl-32 flex flex-col gap-4 md:gap-0">
          <h1 className="text-5xl font-semibold ">
            <span>Welcome to </span>
            <span className="text-ss-orange-500">Super</span>
            <span className="text-orange-500">Star</span>
          </h1>
          <h2 className="text-stone-400 md:text-end">A decentralized platform lottery on {chainName} blockchain</h2>
        </div>
      </div>
      <DrawPresent draw={lastDraw} />
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl">Recent Draws</h2>
        <div className="grid grid-cols-auto-250 md:[&>*:nth-child(4)]:hidden lg:[&>*:nth-child(4)]:flex gap-6 ">
          {recentDraws.map((draw) => (
            <RecentDrawsCard key={draw.id} draw={draw} />
          ))}
        </div>
      </div>
      <HowToPlay />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl">Recent Winners</h2>
          <div className="grid grid-cols-2 gap-4">
            {recentWinners.map((winner, i) => (
              <RecentWinnersCard key={winner.prize + i} winner={winner} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Recent Purchased Tickets</h2>
          <div className="grid grid-cols-2 gap-4">
            {recentTickets.map((purchase, i) => (
              <RecentTicketsPurchased key={purchase.buyer + i} purchase={purchase} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
