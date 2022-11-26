import React from "react";
import Star from "../Icons/Star";
import "./BallPlanets.css";

interface Props {
  num: number;
}

const StarBall: React.FC<Props> = ({ num }) => {
  return (
    <div className="relative h-17 w-17 flex items-center justify-center rounded-full ">
      <Star className="ball-planet" />
      <span className="absolute text-stone-800 text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {num}
      </span>
    </div>
  );
};

export default StarBall;
