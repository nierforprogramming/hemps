import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <svg
        width="25"
        height="28"
        viewBox="0 0 100 90"
        style={{ flexShrink: 0 }}
      >
        <path d="M50 80C44 64,44 34,50 12C56 34,56 64,50 80" fill="#F4EFE4" />
        <path d="M50 80C38 72,20 56,14 26C24 44,40 62,50 80" fill="#F4EFE4" />
        <path d="M50 80C62 72,80 56,86 26C76 44,60 62,50 80" fill="#F4EFE4" />

        <line
          x1="50"
          y1="80"
          x2="50"
          y2="13"
          stroke="rgba(244,239,228,0.22)"
          strokeWidth="1"
        />
        <line
          x1="50"
          y1="80"
          x2="15"
          y2="27"
          stroke="rgba(244,239,228,0.22)"
          strokeWidth="1"
        />
        <line
          x1="50"
          y1="80"
          x2="85"
          y2="27"
          stroke="rgba(244,239,228,0.22)"
          strokeWidth="1"
        />

        <circle cx="50" cy="80" r="5.5" fill="#C2882A" />
        <circle cx="50" cy="80" r="2.5" fill="#1B3820" />
      </svg>

      <div className="uppercase">
        <p className="text-secondary tracking-wider font-serif">Nepal Hemp</p>
        <p className="text-accent text-[12px] tracking-widest font-serif">
          Collective
        </p>
      </div>
    </div>
  );
};

export default Logo;
