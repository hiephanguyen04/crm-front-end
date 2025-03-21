import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const OpportunitiesIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.96317 2.20508H12.0362C14.1588 2.20508 15.48 3.70353 15.48 5.82407V11.5461C15.48 13.6666 14.1588 15.1651 12.0355 15.1651H5.96317C3.84054 15.1651 2.52002 13.6666 2.52002 11.5461V5.82407C2.52002 3.70353 3.84684 2.20508 5.96317 2.20508Z"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.491 11.4358C9.41993 11.4772 8.41532 10.9195 7.88432 9.98785C7.42756 9.17936 7.42756 8.19094 7.88432 7.38181C8.41532 6.45079 9.41993 5.89246 10.491 5.93379"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.05096 7.87793H10.2608M7.05096 9.49383H10.2608"
        stroke="#A9ABAD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
