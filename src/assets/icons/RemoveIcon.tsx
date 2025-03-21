import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const RemoveIcon: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8 7.23389L13.3594 13.2651C13.2683 14.5126 12.2295 15.4793 10.9777 15.4793H6.66273C5.41166 15.4793 4.37214 14.5126 4.28108 13.2643L3.84047 7.23389"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7707 4.96973H2.86945"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5354 4.96892L11.1733 3.18618C11.0682 2.79321 10.7117 2.52002 10.3054 2.52002H7.3381C6.92972 2.51862 6.57177 2.79181 6.46599 3.18618L6.10735 4.96892"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.45316 8.84229V12.0883M9.88704 8.84229V12.0883"
        stroke="white"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
