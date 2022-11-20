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
        `min-w-fit outline-none py-1 px-2 rounded-lg text-zinc-50 font-extrabold hover:underline transition-all`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
