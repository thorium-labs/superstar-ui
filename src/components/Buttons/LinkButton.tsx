import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

const LinkButton: React.FC<PropsWithChildren<ButtonAttributes>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        `min-w-fit outline-none rounded-lg text-stone-50 font-extrabold hover:underline transition-all`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
