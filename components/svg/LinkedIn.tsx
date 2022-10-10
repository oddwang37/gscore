import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.814 3.506c0-.782.274-1.426.823-1.934C2.187 1.064 2.9.81 3.778.81c.863 0 1.56.25 2.094.75.549.516.823 1.188.823 2.016 0 .75-.266 1.376-.8 1.876-.549.516-1.27.773-2.164.773h-.023c-.863 0-1.561-.257-2.094-.773-.533-.516-.8-1.165-.8-1.946ZM1.12 24.02V8.359h5.222v15.662H1.12Zm8.116 0h5.222v-8.746c0-.547.063-.969.188-1.266.22-.531.553-.98 1-1.348.447-.367 1.008-.55 1.682-.55 1.757 0 2.635 1.18 2.635 3.54v8.37h5.223v-8.98c0-2.313-.55-4.068-1.647-5.264-1.098-1.195-2.549-1.793-4.352-1.793-2.023 0-3.6.867-4.729 2.602v.047h-.023l.023-.047V8.36H9.236c.031.5.047 2.055.047 4.666 0 2.61-.016 6.275-.047 10.996Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
