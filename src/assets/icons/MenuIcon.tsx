import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const MenuIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13.4971H15.0004"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 8.99707H15.0004"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 4.49707H15.0004"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.00849 4.48604V4.53402M3.20294 4.49635C3.20294 4.60437 3.11531 4.69192 3.00729 4.69192C2.89928 4.69192 2.81177 4.60437 2.81177 4.49635C2.81177 4.38834 2.89928 4.30078 3.00729 4.30078C3.11531 4.30078 3.20294 4.38834 3.20294 4.49635Z"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.00849 9.08271V9.13071M3.20294 9.09299C3.20294 9.20106 3.11531 9.28859 3.00729 9.28859C2.89928 9.28859 2.81177 9.20106 2.81177 9.09299C2.81177 8.98499 2.89928 8.89746 3.00729 8.89746C3.11531 8.89746 3.20294 8.98499 3.20294 9.09299Z"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.00849 13.486V13.534M3.20294 13.4963C3.20294 13.6044 3.11531 13.6919 3.00729 13.6919C2.89928 13.6919 2.81177 13.6044 2.81177 13.4963C2.81177 13.3883 2.89928 13.3008 3.00729 13.3008C3.11531 13.3008 3.20294 13.3883 3.20294 13.4963Z"
        stroke="#DD5313"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
