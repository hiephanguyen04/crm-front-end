import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon7: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M9.82819 3.13275L11.1988 5.87082C11.3331 6.13962 11.5923 6.32601 11.893 6.36914L14.959 6.81046C15.7165 6.91983 16.018 7.83791 15.4697 8.36396L13.2526 10.4943C13.0348 10.7038 12.9356 11.005 12.9871 11.3007L13.5103 14.3084C13.6392 15.0524 12.8473 15.62 12.1702 15.268L9.42991 13.847C9.16127 13.7076 8.83952 13.7076 8.57009 13.847L5.82975 15.268C5.15267 15.62 4.3608 15.0524 4.49043 14.3084L5.01288 11.3007C5.06443 11.005 4.96525 10.7038 4.74736 10.4943L2.53026 8.36396C1.98204 7.83791 2.28348 6.91983 3.041 6.81046L6.10699 6.36914C6.40765 6.32601 6.66771 6.13962 6.80203 5.87082L8.17181 3.13275C8.51074 2.45575 9.48926 2.45575 9.82819 3.13275Z"
        stroke="#A9ABAD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
