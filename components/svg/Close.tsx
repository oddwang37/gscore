import * as React from 'react';
import { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path
      d="M3 21 21 3M21 21 3 3"
      stroke="#ff5a65"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgClose;
