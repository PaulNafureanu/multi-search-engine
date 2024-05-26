import React, { ReactNode, ReactSVG, ReactSVGElement } from "react";

interface Props {
  svg: ReactNode;
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
}

const SVGWrapper = ({
  svg,
  fill,
  stroke,
  width,
  height,
  className = "min-h-40 min-w-40 h-full w-full",
}: Props) => {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill={fill}
        stroke={stroke}
        width={width}
        height={height}
      >
        {svg}
      </svg>
    </span>
  );
};

export default SVGWrapper;
