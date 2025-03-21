import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon1: React.FC<IconProps> = () => {
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
        d="M11.0533 2.07131H6.06357C4.50357 2.06533 3.22482 3.30883 3.18807 4.86808V12.9028C3.15357 14.4876 4.40982 15.8008 5.99457 15.8361C6.01782 15.8361 6.04032 15.8368 6.06357 15.8361H12.0553C13.6258 15.7723 14.8633 14.4748 14.8521 12.9028V6.02833L11.0533 2.07131Z"
        stroke="#A9ABAD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8563 2.0625V4.24425C10.8563 5.30925 11.7173 6.1725 12.7823 6.1755H14.8486"
        stroke="#A9ABAD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.716 11.519H6.66602"
        stroke="#A9ABAD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.18241 8.70459H6.66541"
        stroke="#A9ABAD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
