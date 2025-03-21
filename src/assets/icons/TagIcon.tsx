import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TagIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.26187 4.47485C2.26406 3.41603 3.06456 2.46666 4.10369 2.28788C4.31676 2.25066 6.81606 2.25577 7.8501 2.2565C8.87318 2.25723 9.7452 2.62501 10.4676 3.34598C12.0015 4.87693 13.5339 6.40935 15.0641 7.94325C15.9697 8.8503 15.9821 10.2426 15.0802 11.1526C13.7791 12.4661 12.4714 13.773 11.1587 15.0741C10.2494 15.9753 8.85713 15.9636 7.94933 15.0581C6.40158 13.5146 4.85384 11.9713 3.31266 10.4213C2.71648 9.82155 2.36476 9.0969 2.28668 8.2497C2.22392 7.57253 2.2604 5.05499 2.26187 4.47485Z"
        stroke="#DD5313"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.43034 6.23648C7.42741 6.88885 6.88231 7.4252 6.22338 7.42374C5.56882 7.42228 5.02371 6.87645 5.02736 6.22627C5.03174 5.54762 5.56882 5.01858 6.25183 5.0215C6.89983 5.02369 7.43326 5.57317 7.43034 6.23648Z"
        stroke="#DD5313"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
