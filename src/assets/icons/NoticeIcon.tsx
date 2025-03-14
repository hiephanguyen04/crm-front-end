import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const NotificationIcon: React.FC<IconProps> = ({
  size = 18,
  ...props
}) => {
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
        d="M9 13.3857C13.2294 13.3857 15.186 12.8432 15.375 10.6654C15.375 8.4891 14.0109 8.62904 14.0109 5.95883C14.0109 3.8731 12.0339 1.5 9 1.5C5.96608 1.5 3.98914 3.8731 3.98914 5.95883C3.98914 8.62904 2.625 8.4891 2.625 10.6654C2.81471 12.8514 4.77133 13.3857 9 13.3857Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.7916 15.6431C9.76849 16.7791 8.17248 16.7926 7.1396 15.6431"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
