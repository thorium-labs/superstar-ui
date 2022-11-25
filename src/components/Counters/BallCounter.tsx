import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import MinArrowDown from "../Icons/MinArrowDown";
import MinArrowUp from "../Icons/MinArrowUp";

import "./Counters.css";
import StarBall from "../StarBall/StarBall";

interface Props {
  initialValue: number;
  changeNum: (n: number) => void;
}

const BallCounter: React.FC<
  Props & React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ changeNum, initialValue, className }) => {
  let [count, setCount] = useState<number>(initialValue);

  const minus = useCallback(() => {
    console.log(count);
    if (count === 0) return setCount(9);
    setCount(count - 1);
  }, [count]);

  const plus = useCallback(() => {
    console.log(count);
    if (count === 9) return setCount(0);
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    changeNum(count);
  }, [count]);

  return (
    <div
      className={clsx(
        "ball-count flex gap-1 flex-col items-center justify-center ",
        className && className
      )}
    >
      <button className="arrow outline-none opacity-20" onClick={plus}>
        <MinArrowUp />
      </button>
      <StarBall num={count} />
      <button className="arrow outline-none opacity-20" onClick={minus}>
        <MinArrowDown />
      </button>
    </div>
  );
};

export default BallCounter;
