import clsx from "clsx";
import React, { useState } from "react";
import { GradientButton } from "../../components/Buttons";
import { useWallet } from "../../providers/WalletProvider";
import MyTickets from "./components/MyTickets";
import Statistics from "./components/Statistics";
import Transactions from "./components/Transactions";

const Results: React.FC = () => {
  const { connectWallet, address } = useWallet();
  const [currentTab, setCurrenTab] = useState<
    "statistics" | "my-tickets" | "transactions"
  >("statistics");

  if (!address) {
    return (
      <div className="min-h-[10rem] w-full flex items-center justify-center flex-col gap-4">
        <p className="text-stone-400">
          Please, connect your wallet to see your information
        </p>
        <GradientButton className="text-2xl" onClick={connectWallet}>
          Connect
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex gap-12 text-xl font-semibold">
        <button
          className={clsx(
            "uppercase",
            currentTab === "statistics" &&
              "text-transparent bg-clip-text bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80"
          )}
          onClick={() => setCurrenTab("statistics")}
        >
          Statistics
        </button>
        <button
          className={clsx(
            "uppercase",
            currentTab === "my-tickets" &&
              "text-transparent bg-clip-text bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80"
          )}
          onClick={() => setCurrenTab("my-tickets")}
        >
          My Tickets
        </button>
        <button
          className={clsx(
            "uppercase",
            currentTab === "transactions" &&
              "text-transparent bg-clip-text bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80"
          )}
          onClick={() => setCurrenTab("transactions")}
        >
          Transactions
        </button>
      </div>
      <div className="">
        {currentTab === "statistics" && <Statistics />}
        {currentTab === "my-tickets" && <MyTickets />}
        {currentTab === "transactions" && <Transactions />}
      </div>
    </div>
  );
};

export default Results;
