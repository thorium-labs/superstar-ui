import React, { useState } from "react";
import { BallCounter } from "../../../components/Counters";
import "./BuyTicketContainer.css";

interface Props {
  num: string;
}

const BuyTicketContainer: React.FC<Props> = ({ num }) => {
  const numbers = num.split("");
  const [pos1, setPos1] = useState<number>(+numbers[0]);
  const [pos2, setPos2] = useState<number>(+numbers[1]);
  const [pos3, setPos3] = useState<number>(+numbers[2]);
  const [pos4, setPos4] = useState<number>(+numbers[3]);
  const [pos5, setPos5] = useState<number>(+numbers[4]);
  const [pos6, setPos6] = useState<number>(+numbers[5]);

  return (
    <div className="flex relative rounded-xl w-full">
      <div className="bg-stone-600/50  p-2 min-w-[15rem] rounded-xl flex items-center justify-center flex-col">
        <p className="font-bold text-xs">LOTTERY</p>
        <p className="text-6xl font-extrabold text-stone-500">1</p>
      </div>
      <div className=" points-box relative flex flex-col justify-between bg-stone-600/50">
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
        <span className="h-[5px] w-[5px] bg-ss-bg block rounded-full" />
      </div>
      <div className="bg-stone-600/50 p-2 flex flex-1 gap-4 items-center justify-center rounded-xl">
        <BallCounter initialValue={pos1} changeNum={setPos1} />
        <BallCounter initialValue={pos2} changeNum={setPos2} />
        <BallCounter initialValue={pos3} changeNum={setPos3} />
        <BallCounter initialValue={pos4} changeNum={setPos4} />
        <BallCounter initialValue={pos5} changeNum={setPos5} />
        <BallCounter initialValue={pos6} changeNum={setPos6} />
      </div>
    </div>
  );
};

export default BuyTicketContainer;
