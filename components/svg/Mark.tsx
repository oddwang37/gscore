import * as React from "react";
import { SVGProps } from "react";

const SvgMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M20.233 10.748c0 6.454-6.611 10.43-7.985 11.188a.514.514 0 0 1-.497 0c-1.375-.757-7.984-4.734-7.984-11.188C3.767 5.602 6.855 2 12 2c5.146 0 8.233 3.602 8.233 8.748Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.884 10.233a4.116 4.116 0 1 0 8.233 0 4.116 4.116 0 0 0-8.233 0v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgMark;
