import React, { PropsWithChildren } from "react";
import "./Buttons.css";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StarsButton: React.FC<PropsWithChildren<ButtonAttributes>> = ({
  children,
  ...props
}) => {
  return (
    <div className="stars-button-container relative">
      <button
        {...props}
        className="stars-button w-fit outline-none py-3 px-5 rounded-3xl text-lg font-semibold transition-all border-[2px] border-ss-orange-500 hover:bg-gradient-to-bl hover:from-ss-orange-500 hover:to-orange-500 hover:scale-125 hover:border-transparent"
      >
        <span className="star-button-text absolute transition-all">
          {children}
        </span>
        <span className="stars-button-text-hide transition-all">
          {children}
        </span>
        <img
          src="/assets/orange-ball.png"
          alt="star"
          className="star-2 absolute transition-all opacity-0 w-[16px] top-[1rem] left-[1rem] scale-105"
        />
        <img
          src="/assets/black-star-front.png"
          alt="star"
          className="star-3 absolute transition-all opacity-0 w-[32px] left-[2rem] bottom-[1rem]"
        />
        <img
          src="/assets/orange-star-2.png"
          alt="star"
          className="star-4 absolute transition-all opacity-0 w-[16px] right-2 bottom-[-4px]"
        />
      </button>
      <img
        src="/assets/ss-orange-star-1.png"
        alt="star"
        className="star-1 absolute transition-all opacity-0 w-[2rem] top-[-1rem] right-[1rem] scale-105"
      />
    </div>
  );
};

export default StarsButton;
