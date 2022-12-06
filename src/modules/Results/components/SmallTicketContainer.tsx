import React, { useId } from 'react';
import { getRandomId } from '../../../utils/getRandomId';

interface Props {
  number: string;
  draw: number;
}

const BlackBall: React.FC<{ num: number }> = ({ num }) => {
  return (
    <div className="relative">
      <img src="assets/stone-ball.png" className="w-[2rem] h-[2rem]" />
      <p className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center text-xl text-stone-50 font-bold">{num}</p>
    </div>
  );
};

const SmallTicketContainer: React.FC<Props> = ({ number, draw }) => {
  return (
    <div className="flex justify-center px-4">
      <div className="relative grid grid-cols-1 min-w-[14rem] max-w-[20rem] ">
        <div className="bg-stone-700/20 backdrop-blur flex flex-col rounded-t-lg p-4 justify-center items-center min-h-[5.75rem]">
          <p className="font-bold text-xs text-stone-100">DRAW</p>
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80">
            {draw}
          </p>
        </div>
        <div className="bg-gradient-to-r from-ss-orange-500/80 to-orange-500/80 p-4 flex rounded-b-lg">
          {number.split('').map((num, i) => {
            return (
              <React.Fragment key={getRandomId()}>
                <BlackBall num={+num} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="points-box points-box-horizontal absolute z-50 flex justify-between left-0 top-[5.75rem] w-full">
          {Array.from({ length: 17 }).map((e, i) => (
            <span key={getRandomId()} className="h-[6px] w-[6px] bg-ss-bg block rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallTicketContainer;
