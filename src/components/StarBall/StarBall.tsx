import React from "react";
import Star from "../Icons/Star";

interface Props {
  num: number;
  font: string;
  width: string;
  ballColor?: string;
}

const StarBall: React.FC<Props> = ({
  num,
  width,
  font,
  ballColor = "stone",
}) => {
  return (
    <div
      className={`relative w-[${width}] flex items-center justify-center rounded-full`}
    >
      <img src={`/assets/${ballColor}-ball.png`} className={`w-[${width}]`} />
      <Star className={`ball-planet absolute w-[${width}] h-[${width}]`} />
      <span
        className={`absolute text-stone-800 text-${font} font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {num}
      </span>
    </div>
  );
};

export default StarBall;
