import React from "react";
import { IconProps } from "./IconProps";

const ArrowRight: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
    </svg>
  );
};

export default ArrowRight;
