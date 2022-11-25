import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const GradientButton: React.FC<PropsWithChildren<ButtonAttributes>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        `bg-gradient-to-bl outline-none from-ss-orange-500 to-orange-500 py-1 px-2 rounded-lg text-stone-800 font-semibold hover:filter hover:brightness-110 transition-all`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
