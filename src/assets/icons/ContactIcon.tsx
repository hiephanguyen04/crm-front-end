import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ContactIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.008 3.54395H11.4947C13.4036 3.54395 14.5861 4.60456 14.5805 6.55277V12.4661C14.5805 14.415 13.398 15.4812 11.4891 15.4812H6.008C4.10463 15.4812 2.9165 14.396 2.9165 12.417V6.55277C2.9165 4.60456 4.10463 3.54395 6.008 3.54395Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.33936 12.8052C6.33936 12.0185 6.96003 11.0391 8.74783 11.0391C10.5363 11.0391 11.157 12.0114 11.157 12.7982"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.2859 7.88607C10.2859 8.73582 9.59726 9.42442 8.74745 9.42442C7.8977 9.42442 7.20837 8.73582 7.20837 7.88607C7.20837 7.03629 7.8977 6.34766 8.74745 6.34766C9.59726 6.34766 10.2859 7.03629 10.2859 7.88607Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3683 2.52002V4.65247M6.13269 2.52002V4.65247"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
