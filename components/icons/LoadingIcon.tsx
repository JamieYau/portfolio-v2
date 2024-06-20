import { SVGProps } from "react";

export default function LoadingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          strokeOpacity={0.3}
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        ></path>
        <path
          d="M12 3C16.9706 3 21 7.02944 21 12"
          transform="rotate(360 12 12)"
        ></path>
      </g>
    </svg>
  );
}