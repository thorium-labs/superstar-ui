import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import MinusRounded from "../Icons/MinusRounded";
import PlusRounded from "../Icons/PlusRounded";

interface Props {
  maxNumber?: number;
  minNumber?: number;
  initialValue?: number;
  changeNum: (n: number) => void;
}

const SimpleCounter: React.FC<
  Props & React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ changeNum, initialValue, maxNumber, minNumber, className }) => {
  let [count, setCount] = useState<number>(initialValue || 0);

  const minus = useCallback(() => {
    if (count === 0) return;
    if (minNumber && count === minNumber) return;
    setCount(count - 1);
  }, [count]);

  const plus = useCallback(() => {
    if (maxNumber && count === maxNumber) return;
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    changeNum(count);
  }, [count]);

  return (
    <div
      className={clsx(
        "flex gap-1 items-center justify-center",
        className && className
      )}
    >
      <button className="outline-none" onClick={minus}>
        <MinusRounded className="w-[24px] fill-stone-400 hover:fill-stone-50" />
      </button>
      <p className="min-w-[1rem] text-center">{count}</p>
      <button className="outline-none" onClick={plus}>
        <PlusRounded className="w-[24px] fill-stone-400 hover:fill-stone-50" />
      </button>
    </div>
  );
};

export default SimpleCounter;
