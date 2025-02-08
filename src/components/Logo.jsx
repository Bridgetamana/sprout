import React from "react";

const Logo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5 flex items-center">
      <span className="text-lg font-semibold text-stone-700">Sprout</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        width="140"
        height="60"
        fill="currentColor"
      >
        <g>
          <path
            d="M24 4C17 14 8 18 8 28a16 16 0 0032 0c0-10-9-14-16-24z"
            fill="none"
            stroke="#047857"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 8c-5 8-10 10-10 18a10 10 0 0020 0c0-8-5-10-10-18"
            fill="none"
            stroke="#047857"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </a>
  );
};

export default Logo;
