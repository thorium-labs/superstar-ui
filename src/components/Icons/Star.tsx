import React from "react";

const Star: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="384"
      height="384"
      fill="none"
      viewBox="0 0 384 384"
      {...props}
    >
      <path
        fill="url(#paint0_linear_2_113)"
        d="M263.8 304.52c-2.55.2-4.98-1.07-7.42-2.36-19.89-10.46-39.86-20.78-59.63-31.48-4.28-2.32-7.53-1.97-11.57.22-19.88 10.78-39.85 21.41-59.87 31.93-7.56 3.97-15.59.72-18-6.9-.73-2.3-.59-4.61-.19-6.92 3.94-23.05 7.87-46.11 11.89-69.15.5-2.84-.14-4.82-2.28-6.87-16.98-16.35-33.83-32.82-50.72-49.26-3.75-3.65-5.28-8.03-3.61-13.1 1.6-4.83 4.99-7.72 10.15-8.42 3.12-.42 6.21-1.03 9.32-1.49 20.75-3.03 41.49-6.09 62.25-9 2.23-.31 3.33-1.28 4.25-3.17 10.52-21.47 21.1-42.91 31.67-64.35 2.37-4.81 6.04-7.8 11.61-7.52 5.34.27 9.25 2.88 11.55 7.83 9.65 20.83 20.89 40.9 29.99 62 1.21 2.8 3.03 4.86 6.85 5.37 22.54 3.01 45.03 6.43 67.54 9.74 1.89.28 3.82.57 5.61 1.21 8.76 3.16 10.9 13.93 3.96 20.79-14.41 14.23-28.49 28.87-43.7 42.21-8.18 7.18-10.04 14.09-7.8 24.44 4.23 19.52 7.04 39.35 10.37 59.06 1.43 8.46-3.9 15.18-12.23 15.18l.01.01z"
      ></path>
      <defs>
        <radialGradient
          id="paint0_linear_2_113"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#f5f5f4"></stop>
          <stop offset="100%" stopColor="#a8a29e"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Star;
