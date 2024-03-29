import React from "react";

interface SvgSearchIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const SvgSearchIcon: React.FC<SvgSearchIconProps> = ({className, width, height}) => (
  <svg
    className={`svgSearchIcon`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={width}
    height={height}
  >
    <path d="M42.5 22C49.404 22 55 27.596 55 34.5S49.404 47 42.5 47c-2.364 0-4.575-.657-6.5-1.757l-9.025 9.025a3 3 0 0 1-4.243-4.243l9.065-9.064A12.442 12.442 0 0 1 30 34.5C30 27.596 35.596 22 42.5 22Zm0 4a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
  </svg>
);
