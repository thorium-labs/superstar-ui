import React from 'react';
import Star from '../Icons/Star';
import clsx from 'clsx';

interface Props {
  num: number;
  ballColor?: string;
}

const StarBall: React.FC<Props> = ({ num, ballColor = 'stone' }) => {
  return (
    <div className={`relative md:w-[4rem] w-[2.8rem] flex items-center justify-center rounded-full`}>
      <img src={`/assets/${ballColor}-ball.png`} className={`md:w-[4rem] w-[2.8rem]`} />
      <Star className={`ball-planet absolute md:w-[4rem] w-[2.8rem] md:h-[4rem] h-[2.8rem]`} />
      <span
        className={clsx(`absolute text-stone-800 font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:font-xl`)}
      >
        {num}
      </span>
    </div>
  );
};

export default StarBall;
