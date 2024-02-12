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
    <div className="flex relative flex-col md:flex-row">
      <div className="p-2 md:min-w-[15rem] rounded-xl flex items-center justify-center flex-col bg-stone-700/30 backdrop-blur">
        <p className="font-bold text-xs text-stone-100">DRAW</p>
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
          {draw?.id}
        </p>
      </div>
      <div className=" points-box points-box-vertical absolute z-50 w-full md:w-auto flex md:flex-col justify-between md:h-full md:left-[14.8rem] top-[5.5rem] md:top-auto before:top-[-10px] before:left-[-12px] md:before:top-[-15px] after:bottom-[-10px] after:right-[-12px] md:after:bottom-[-15px] md:after:right-auto md:after:left-[-12px]">
        {Array.from({ length: 12 }).map((e, i) => (
          <span key={`span${i}`} className="md:h-[6px] md:w-[6px] h-[8px] w-[8px] bg-ss-bg block rounded-full" />
        ))}
      </div>
      <div className=" max-w-fit py-2 px-4 md:px-12 flex flex-1 gap-2 md:gap-4 items-center justify-center rounded-xl relative bg-gradient-to-bl from-ss-orange-500/80 to-orange-500/80 backdrop-blur">
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
