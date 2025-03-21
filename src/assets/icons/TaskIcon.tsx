import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TaskIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83662 2.25H12.1627C14.3737 2.25 15.75 3.81089 15.75 6.01978V11.9802C15.75 14.1891 14.3738 15.75 12.1619 15.75H5.83662C3.62554 15.75 2.25 14.1891 2.25 11.9802V6.01978C2.25 3.81089 3.63211 2.25 5.83662 2.25Z"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.53027 11.4785H12.763"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.6001 10.9498L6.21745 11.5671L7.42004 10.3652"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.6001 7.01811L6.21745 7.63545L7.42004 6.43359"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.53027 7.5498H12.763"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
