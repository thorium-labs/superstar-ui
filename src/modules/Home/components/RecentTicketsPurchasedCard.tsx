import React from 'react';
import { Purchase } from '../../../interfaces/indexer.interface';
import { IntlAddress } from '../../../utils/intl';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface Props {
  purchase: Purchase;
}

const RecentTicketsPurchased: React.FC<Props> = ({ purchase }) => {
  const isMd = useMediaQuery('md');
  return (
    <div className="relative">
      <div className="bg-stone-700/60 rounded-lg flex flex-col p-4 gap-2 relative mt-[2rem] z-20 backdrop-blur-sm min-h-[100px] justify-between">
        <p className="text-md text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 font-semibold">
          {IntlAddress(purchase.buyer, isMd ? 8 : 6)}
        </p>
        <div className="flex justify-between px-2">
          <p>x{purchase.tickets} Tickets</p>
          <p>#{purchase.drawId}</p>
        </div>
      </div>
      <img src="assets/ss-orange-star-4.png" className="absolute w-[4rem] z-10 bottom-0 right-0" />
    </div>
  );
};

export default RecentTicketsPurchased;
