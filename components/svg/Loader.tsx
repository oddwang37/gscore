import * as React from "react";
import { SVGProps } from "react";

const SvgLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#Loader_svg__a)">
      <path
        d="M20 12a8 8 0 1 1-2.343-5.657"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="Loader_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLoader;
