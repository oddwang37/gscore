import * as React from 'react';
import { SVGProps } from 'react';

const Logout = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16.313 8.063 20.25 12l-3.938 3.938M9.75 12h10.5M9.75 20.25H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h5.25" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Logout;
