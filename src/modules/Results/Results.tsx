import clsx from 'clsx';
import React, { useState } from 'react';
import MyTickets from './components/MyTickets';
import RecentDraws from './components/RecentDraws';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentTab, setCurrenTab] = useState<'recent-draws' | 'my-tickets'>(searchParams.has('tickets') ? 'my-tickets' : 'recent-draws');

  const TabButton = (key: 'recent-draws' | 'my-tickets') => {
    return (
      <button key={key} className={clsx('uppercase', key === currentTab ? 'selected' : '')} onClick={() => setCurrenTab(key)}>
        {key.replace('-', ' ')}
        {key === currentTab ? (
          <motion.div
            className="underline bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80 h-[2px] w-full rounded-md"
            layoutId="underline"
          />
        ) : null}
      </button>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex gap-12 text-xl font-semibold mb-8">
        {TabButton('recent-draws')}
        {TabButton('my-tickets')}
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentTab ? currentTab : 'empty'}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full md:p-4"
        >
          {currentTab === 'recent-draws' && <RecentDraws />}
          {currentTab === 'my-tickets' && <MyTickets />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Results;
