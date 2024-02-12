import React from 'react';

const MinArrowUp: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      {...props}
    >
      <path stroke="none" d="M128 320l128-128 128 128z"></path>
    </svg>
  );
};

export default MinArrowUp;
