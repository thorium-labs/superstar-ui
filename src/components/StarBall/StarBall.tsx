import React from "react";
import Star from "../Icons/Star";
import "./BallPlanets.css";

interface Props {
  num: number;
}

const StarBall: React.FC<Props> = ({ num }) => {
  return (
    <div className="relative w-[4rem] min-h-[4rem] flex items-center justify-center rounded-full ">
      <img src="/assets/stone-ball.png" className="w-[4rem] min-h-[4rem]" />
      <Star className="ball-planet absolute" />
      <span className="absolute text-stone-800 text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {num}
      </span>
    </div>
  );
};

export default StarBall;
