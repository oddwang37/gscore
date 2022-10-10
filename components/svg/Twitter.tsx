import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.28.098V.094h1.192l.436.087c.29.056.554.13.792.222.237.092.466.199.688.32.222.123.423.247.603.374.18.126.34.258.482.399.14.142.36.179.659.11.298-.069.619-.164.963-.286.344-.123.685-.26 1.021-.413.337-.153.542-.25.615-.29l.115-.07.004-.006.023-.012.023-.011.023-.012.023-.011.005-.007.007-.005.006-.004.005-.007.023-.007.023-.005-.005.035L25 .529l-.011.034-.011.035-.012.023-.011.023-.012.034a.79.79 0 0 0-.023.092c-.008.038-.08.19-.218.458a5.74 5.74 0 0 1-.516.813 4.004 4.004 0 0 1-.555.623 5.259 5.259 0 0 0-.328.298.987.987 0 0 1-.195.16l-.115.076-.023.012-.023.011-.005.007-.006.005-.007.004-.005.007-.023.012-.023.011-.004.007-.007.004-.007.005-.005.007-.004.007-.007.004-.007.005-.005.007h.115l.642-.138c.429-.091.838-.202 1.228-.332l.62-.206.068-.023.035-.011.022-.012.023-.011.023-.012.023-.011.046-.007.046-.005v.046l-.011.005-.012.007-.004.006-.007.005-.007.005-.005.006-.004.007-.007.005-.007.004-.005.007-.004.007-.007.005-.012.023-.011.023-.007.004-.291.39c-.192.256-.295.386-.31.39-.015.004-.037.027-.064.068-.026.043-.188.213-.487.51-.298.299-.59.564-.876.796-.288.234-.433.52-.436.861-.005.34-.022.723-.053 1.15-.03.428-.088.89-.172 1.387a16.503 16.503 0 0 1-.39 1.684 15.31 15.31 0 0 1-.642 1.832c-.253.596-.517 1.13-.792 1.604-.275.474-.528.875-.757 1.203-.23.329-.463.638-.7.928-.237.29-.537.617-.9.98l-.596.596a15.34 15.34 0 0 1-.45.376c-.262.218-.545.437-.848.655a9.816 9.816 0 0 1-.83.543 26.5 26.5 0 0 1-.914.498c-.355.187-.739.362-1.152.522-.413.16-.848.31-1.307.447-.46.137-.903.244-1.331.32-.428.077-.914.142-1.457.195l-.814.08v.012H7.55v-.012l-.195-.011c-.13-.008-.237-.015-.321-.023a37.96 37.96 0 0 1-.952-.126c-.55-.076-.983-.153-1.296-.23-.314-.076-.78-.22-1.4-.434-.62-.214-1.15-.43-1.59-.649a64.013 64.013 0 0 1-.826-.412 5.863 5.863 0 0 1-.371-.211l-.207-.126-.005-.007-.006-.005-.007-.004-.005-.007-.023-.011-.023-.012-.004-.007-.007-.004-.007-.005-.005-.007-.004-.007-.007-.004H.278v-.046l.023.005.023.006.103.012c.07.008.257.019.563.034a10.354 10.354 0 0 0 3.303-.378c.49-.13.94-.284 1.35-.463.408-.18.698-.314.871-.403.172-.087.433-.249.785-.486l.528-.355.004-.006.007-.005.007-.005.005-.007.004-.006.007-.005.007-.005.004-.006.023-.007.023-.005.005-.023.007-.023.007-.004.004-.007-.183-.012-.356-.023a3.45 3.45 0 0 1-.539-.103 5.177 5.177 0 0 1-.792-.275 6.107 6.107 0 0 1-.826-.435 4.062 4.062 0 0 1-.58-.42c-.118-.11-.27-.265-.459-.467a4.635 4.635 0 0 1-.486-.625 5.613 5.613 0 0 1-.395-.74l-.19-.417-.012-.034-.011-.035-.007-.023-.005-.023.035.005.034.007.253.034c.168.023.432.03.791.023.36-.008.608-.023.746-.046a4.74 4.74 0 0 0 .252-.046l.046-.011.057-.012.058-.01.004-.008.007-.004.007-.005.005-.007-.046-.011-.046-.012-.046-.011-.046-.012-.046-.011a4.225 4.225 0 0 1-.16-.046 8.793 8.793 0 0 1-.62-.252 4.744 4.744 0 0 1-.803-.424c-.2-.138-.39-.288-.569-.451a6.496 6.496 0 0 1-.59-.637 4.585 4.585 0 0 1-.573-.905 5.5 5.5 0 0 1-.379-.985 5.312 5.312 0 0 1-.165-.951l-.041-.481.023.004.023.007.023.012.023.011.023.012.023.011.355.16c.237.107.532.199.883.275.352.077.563.119.631.126l.104.012h.206l-.004-.007-.007-.005-.007-.004-.005-.007-.004-.007-.007-.005-.007-.004-.005-.007-.023-.011-.023-.012-.004-.007-.007-.004-.007-.005-.005-.007-.023-.011-.022-.012-.005-.007-.197-.146a3.007 3.007 0 0 1-.395-.374 13.483 13.483 0 0 1-.413-.48 3.716 3.716 0 0 1-.367-.54 6.522 6.522 0 0 1-.34-.728 5.166 5.166 0 0 1-.371-1.769c-.008-.29 0-.538.023-.744.023-.206.068-.44.137-.699.07-.26.169-.535.299-.825l.195-.435.011-.035.012-.034.006-.004.005-.007.005-.007.006-.005.007.005.005.007.005.007.006.004.007.005.005.007.004.006.007.005.012.023.011.023.007.004.005.007.31.344c.206.23.45.485.734.767.283.283.44.43.47.44.03.013.069.048.115.106.046.056.199.191.459.405.26.214.6.462 1.02.745.421.283.888.561 1.4.836.512.275 1.063.523 1.652.745a19.92 19.92 0 0 0 1.239.435c.237.069.642.157 1.216.264.573.107 1.006.175 1.296.206.29.03.49.048.597.053l.16.004-.004-.034-.007-.035-.046-.286a5.374 5.374 0 0 1-.046-.802c0-.344.027-.66.08-.95.054-.291.134-.585.241-.883.107-.298.212-.537.315-.717.104-.179.24-.383.408-.612.168-.229.386-.466.654-.71.268-.244.573-.462.917-.653.345-.19.662-.336.953-.435.29-.1.535-.164.734-.195.199-.03.298-.048.298-.053Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
