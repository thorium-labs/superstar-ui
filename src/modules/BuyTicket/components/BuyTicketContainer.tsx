import React from 'react';
import { BallCounter } from '../../../components/Counters';
import { Draw } from '../../../interfaces/lottery.interface';

interface Props {
  ticketNumber: string;
  setTicketNumber: (n: string, pos: number) => void;
  ticketPosition: number;
  draw: Draw;
}

const BuyTicketContainer: React.FC<Props> = ({ ticketNumber, setTicketNumber, ticketPosition, draw }) => {
  const ticketNumbers = ticketNumber.split('');

  const changeSingleNumber = (singleNum: number, singlePos: number) => {
    ticketNumbers.splice(singlePos, 1, singleNum.toString());
    setTicketNumber(ticketNumbers.join(''), ticketPosition);
  };

  return (
    <div className="flex relative">
      <div className="p-2 min-w-[15rem] rounded-xl flex items-center justify-center flex-col bg-stone-700/30 backdrop-blur">
        <p className="font-bold text-xs text-stone-100">DRAW</p>
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
          {draw?.id}
        </p>
      </div>
      <div className=" points-box points-box-vertical absolute z-50 flex flex-col justify-between h-full left-[14.8rem]">
        {Array.from({ length: 12 }).map((e, i) => (
          <span key={`span${i}`} className="h-[6px] w-[6px] bg-ss-bg block rounded-full" />
        ))}
      </div>
      <div className=" max-w-fit py-2 px-12 flex flex-1 gap-4 items-center justify-center rounded-xl relative bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80 backdrop-blur">
        <BallCounter initialValue={+ticketNumbers[0]} changeNum={changeSingleNumber} singlePos={0} />
        <BallCounter initialValue={+ticketNumbers[1]} changeNum={changeSingleNumber} singlePos={1} />
        <BallCounter initialValue={+ticketNumbers[2]} changeNum={changeSingleNumber} singlePos={2} />
        <BallCounter initialValue={+ticketNumbers[3]} changeNum={changeSingleNumber} singlePos={3} />
        <BallCounter initialValue={+ticketNumbers[4]} changeNum={changeSingleNumber} singlePos={4} />
        <BallCounter initialValue={+ticketNumbers[5]} changeNum={changeSingleNumber} singlePos={5} />
      </div>
    </div>
  );
};

export default BuyTicketContainer;
