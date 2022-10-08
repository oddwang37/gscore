import * as React from "react";
import { SVGProps } from "react";

const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M17 9.14H7a2.5 2.5 0 0 0-2.5 2.5v7.5a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-7.5a2.5 2.5 0 0 0-2.5-2.5ZM12 1.64a5 5 0 0 0-5 5v2.5h10v-2.5a5 5 0 0 0-5-5v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPassword;
