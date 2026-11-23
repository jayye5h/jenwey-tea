import type { SVGProps } from "react";

export default function DelanoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 90"
      role="img"
      aria-label="Delano Miami Beach"
      {...props}
    >
      <text
        fill="currentColor"
        letterSpacing="8"
        fontSize="38"
        fontFamily="system-ui, -apple-system, 'Century Gothic', 'Futura', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="500"
        textAnchor="middle"
        x="150"
        y="42"
      >
        DELANO
      </text>
      <text
        fill="currentColor"
        letterSpacing="6"
        fontSize="18"
        fontFamily="system-ui, -apple-system, 'Century Gothic', 'Futura', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        textAnchor="middle"
        x="150"
        y="74"
      >
        MIAMI BEACH
      </text>
    </svg>
  );
}
