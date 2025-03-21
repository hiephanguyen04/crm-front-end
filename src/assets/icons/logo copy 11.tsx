import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icon11: React.FC<IconProps> = ({ size = 18, ...props }) => {
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
        d="M15.826 5.96317V12.0362C15.826 14.1588 14.3275 15.48 12.207 15.48H6.48496C4.36442 15.48 2.86597 14.1588 2.86597 12.0355V5.96317C2.86597 3.84054 4.36442 2.52002 6.48496 2.52002H12.207C14.3275 2.52002 15.826 3.84684 15.826 5.96317Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25073 6.92446C6.25073 6.40186 6.67456 5.97803 7.19717 5.97803H11.495C12.0176 5.97803 12.4414 6.40186 12.4414 6.92446V7.40503C12.4414 7.78125 12.2817 8.1406 12.0021 8.39281L10.2662 10.1091C10.152 10.2121 10.0869 10.3585 10.0869 10.5126V11.2138C10.0869 11.436 9.951 11.6356 9.74501 11.7176L9.0816 11.9817C8.72506 12.1239 8.33834 11.8612 8.33834 11.4779V10.341C8.33834 10.1974 8.28089 10.0594 8.1793 9.95709L6.64023 8.58685C6.39084 8.33745 6.25073 7.99977 6.25073 7.6474V6.92446Z"
        stroke="#A9ABAD"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
