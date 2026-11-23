import React from "react";

interface CartIconProps extends React.SVGProps<SVGSVGElement> {
  count?: number;
  className?: string;
}

export function CartIcon({
  count = 0,
  className = "w-7 h-[30px]",
  ...props
}: CartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164.9 196.4"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`Cart with ${count} items`}
      className={className}
      fill="currentColor"
      {...props}
    >
      {/* Item Counter inside bag */}
      <text
        x="82.4"
        y="126"
        dy=".35em"
        textAnchor="middle"
        fill="currentColor"
        fontSize="52"
        fontWeight="600"
        fontFamily="inherit"
      >
        {count}
      </text>

      {/* Bag Outline and Handles */}
      <g clipPath="url(#cart-icon-clip)">
        {/* Bag Body */}
        <path
          d="M154.264 51C160.763 51 165.857 56.6869 165.06 63.1777L165.067 63.1848L152.504 186.435C152.5 186.48 152.489 186.524 152.483 186.569C151.729 191.949 147.178 195.999 141.701 196H23.6622C18.1839 196 13.6275 191.95 12.8728 186.569C12.8666 186.525 12.8631 186.479 12.8586 186.435L0.21769 63.1848L0.224784 63.1777C-0.572237 56.6869 4.52226 51 11.0213 51H154.264ZM11.0213 58.25C9.11528 58.25 7.57282 59.726 7.41066 61.5422L7.43194 62.3352L7.43904 62.4485L20.0658 185.564L20.2218 186.237C20.7174 187.742 22.0993 188.75 23.6622 188.75H141.701C143.485 188.749 145.028 187.433 145.29 185.564L157.846 62.4485L157.853 62.3352C158.14 60.1759 156.441 58.25 154.264 58.25H11.0213Z"
          fill="currentColor"
        />
        {/* Bag Handle */}
        <path
          d="M114.961 40C114.961 21.9356 100.481 7.27273 82.6425 7.27273C64.8039 7.27273 50.3243 21.9356 50.3243 40V80H43.1425V40C43.1425 17.919 60.8374 0 82.6425 0C104.447 0 122.142 17.919 122.142 40V80H114.961V40Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="cart-icon-clip">
          <rect width="164.9" height="196.4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
