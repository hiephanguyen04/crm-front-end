import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PhoneIcon: React.FC<IconProps> = () => {
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
        d="M8.64881 9.35429C11.6406 12.3453 12.3193 8.88504 14.2242 10.7886C16.0607 12.6246 17.1162 12.9924 14.7894 15.3185C14.498 15.5528 12.6462 18.3707 6.13845 11.8647C-0.370109 5.358 2.44619 3.50433 2.68048 3.21296C5.0129 0.880384 5.3744 1.94204 7.21087 3.778C9.11577 5.68237 5.65699 6.36331 8.64881 9.35429Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
