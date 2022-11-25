import clsx from "clsx";
import React, { HTMLAttributes, PropsWithChildren } from "react";

const TextOutline: React.FC<
  PropsWithChildren<{}> & HTMLAttributes<HTMLParagraphElement>
> = ({ className, children, ...props }) => {
  return (
    <div className="rounded-[12px] p-[2px] bg-gradient-to-r outline-none from-ss-orange-500 to-orange-500">
      <p
        {...props}
        className={clsx(
          className,
          "flex justify-between h-full bg-ss-bg text-stone-50 rounded-[10px] py-1 px-2"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default TextOutline;
