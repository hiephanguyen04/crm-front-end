import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon6: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M7.6701 15.4427L6.07637 14.7918C5.72975 14.6503 5.33935 14.6619 5.00221 14.8232L4.4374 15.0932C3.84268 15.3785 3.15528 14.9444 3.15601 14.2862L3.16258 5.16891C3.16258 3.36721 4.16595 2.25 5.96473 2.25H11.3946C13.1985 2.25 14.1793 3.36721 14.1793 5.16891V8.31405"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2104 6.67969H6.56836M8.99618 9.5088H6.56836"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3887 15.635L10.7633 15.7401C10.3051 15.8168 9.90081 15.4351 9.95039 14.9732L10.0204 14.3273C10.054 14.0165 10.1847 13.7231 10.3933 13.4897L12.7789 10.8546C13.1006 10.5065 13.6443 10.4853 13.9924 10.8079L14.5674 11.3406C14.9155 11.6624 14.9366 12.206 14.6149 12.5541L12.2593 15.1556C12.0316 15.4096 11.7251 15.5789 11.3887 15.635Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
