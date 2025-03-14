import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon13: React.FC<IconProps> = () => {
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
        d="M4.27121 4.97754H5.82067C6.78088 4.97754 7.55918 5.75583 7.55918 6.71603V14.0109C7.55918 14.9711 6.78088 15.7494 5.82067 15.7494H4.27121C3.311 15.7494 2.53271 14.9711 2.53271 14.0109V6.71603C2.53271 5.75583 3.311 4.97754 4.27121 4.97754Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.1784 4.97754H13.7279C14.6881 4.97754 15.4664 5.75583 15.4664 6.71603V10.42C15.4664 11.3802 14.6881 12.1585 13.7279 12.1585H12.1784C11.2182 12.1585 10.4399 11.3802 10.4399 10.42V6.71603C10.4399 5.75583 11.2182 4.97754 12.1784 4.97754Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.31738 2.25H15.6812"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
