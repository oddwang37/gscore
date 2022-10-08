import * as React from "react";
import { SVGProps } from "react";

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m14.702 20.862.01.008a4.919 4.919 0 0 0 6.122-.672l.688-.688a1.642 1.642 0 0 0 0-2.32l-2.9-2.897a1.64 1.64 0 0 0-2.32 0 1.64 1.64 0 0 1-2.318 0L9.347 9.655a1.64 1.64 0 0 1 0-2.318 1.64 1.64 0 0 0 0-2.32L6.448 2.12a1.64 1.64 0 0 0-2.318 0l-.689.687a4.919 4.919 0 0 0-.67 6.121l.006.011a44.383 44.383 0 0 0 11.925 11.923v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPhone;
