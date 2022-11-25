import React, { useState } from "react";
import { SimpleCounter } from "../../components/Counters";
import BuyTicketContainer from "./components/BuyTicketContainer";

const BuyTicket: React.FC = () => {
  const [ticketNumber, setTicketNumber] = useState<number>(1);
  const [lottoNums, setLottoNums] = useState<string[]>(["210493"]);

  return (
    <div className="">
      <div className="rounded-lg border border-stone-600/50 flex items-center justify-between p-4">
        <SimpleCounter
          changeNum={setTicketNumber}
          maxNumber={25}
          initialValue={ticketNumber}
          minNumber={1}
        />
        <h4>ADD TICKETS</h4>
        <p className="text-stone-200">25 tickets max</p>
      </div>
      <div className="flex flex-col w-full gap-6 my-7 px-4">
        <BuyTicketContainer num={lottoNums[0]} />
        <BuyTicketContainer num={lottoNums[0]} />
        <BuyTicketContainer num={lottoNums[0]} />
      </div>
    </div>
  );
};

export default BuyTicket;
