import React from "react";
import { IconProps } from "./IconProps";

const DotsVertical: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
    </svg>
  );
};

export default DotsVertical;
