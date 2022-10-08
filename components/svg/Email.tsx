import * as React from "react";
import { SVGProps } from "react";

const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M22 7.14v10a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5v-10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 7.14a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 7.14l8.675 5.416a2.5 2.5 0 0 0 2.65 0L22 7.14Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmail;
