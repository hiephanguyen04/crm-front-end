import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const LogoutIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3358 4.14405V3.50866C9.3358 2.12368 8.21282 1 6.82718 1H3.50796C2.12298 1.0007 1 2.12368 1 3.50866V11.0858C1 12.4715 2.12298 13.5944 3.50796 13.5944H6.83416C8.21562 13.5944 9.33508 12.475 9.3358 11.0935V10.4518"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.96 7.29621H5.76294M13.96 7.29621L11.9666 5.31152M13.96 7.29621L11.9666 9.28154"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
