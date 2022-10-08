import * as React from "react";
import { SVGProps } from "react";

const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M12.002 21.64a10 10 0 1 0-.004-20.001 10 10 0 0 0 .004 20v0ZM2.502 14.775h18.714M2.502 8.5h18.714"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.843 1.873a32.385 32.385 0 0 0 .756 19.67M14.157 1.873a32.157 32.157 0 0 1 1.176 8.656 32.153 32.153 0 0 1-1.92 11.013"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgWeb;
