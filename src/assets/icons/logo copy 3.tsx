import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon3: React.FC<IconProps> = ({ size = 18, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 4.875C2.25 2.90609 2.27108 2.25 4.875 2.25C7.47892 2.25 7.5 2.90609 7.5 4.875C7.5 6.84391 7.50831 7.5 4.875 7.5C2.2417 7.5 2.25 6.84391 2.25 4.875Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 4.875C10.5 2.90609 10.5211 2.25 13.125 2.25C15.7289 2.25 15.75 2.90609 15.75 4.875C15.75 6.84391 15.7583 7.5 13.125 7.5C10.4917 7.5 10.5 6.84391 10.5 4.875Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 13.125C2.25 11.1561 2.27108 10.5 4.875 10.5C7.47892 10.5 7.5 11.1561 7.5 13.125C7.5 15.0939 7.50831 15.75 4.875 15.75C2.2417 15.75 2.25 15.0939 2.25 13.125Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 13.125C10.5 11.1561 10.5211 10.5 13.125 10.5C15.7289 10.5 15.75 11.1561 15.75 13.125C15.75 15.0939 15.7583 15.75 13.125 15.75C10.4917 15.75 10.5 15.0939 10.5 13.125Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
