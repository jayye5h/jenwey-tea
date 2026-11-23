import React from "react";

export function HamburgerIcon({
  className = "w-7 h-[18px]",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="44 64 112 72"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-label="Menu"
      className={className}
      {...props}
    >
      <g>
        <path d="M156 64v6H44v-6h112z" />
        <path d="M156 97v6H44v-6h112z" />
        <path d="M156 130v6H44v-6h112z" />
      </g>
    </svg>
  );
}
