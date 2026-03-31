const HeroVisual = () => {
  return (
    <svg
      viewBox="0 0 520 640"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="520" height="640" fill="#0d1f0f" />

      {/* Stars */}
      <circle cx="75" cy="38" r="0.9" fill="rgba(244,239,228,0.5)" />
      <circle cx="128" cy="20" r="0.7" fill="rgba(244,239,228,0.4)" />
      <circle cx="195" cy="52" r="1" fill="rgba(244,239,228,0.55)" />
      <circle cx="258" cy="16" r="1.1" fill="rgba(244,239,228,0.45)" />
      <circle cx="335" cy="36" r="0.8" fill="rgba(244,239,228,0.4)" />
      <circle cx="398" cy="12" r="1" fill="rgba(244,239,228,0.5)" />
      <circle cx="455" cy="42" r="0.7" fill="rgba(244,239,228,0.4)" />
      <circle cx="48" cy="68" r="0.6" fill="rgba(244,239,228,0.35)" />
      <circle cx="168" cy="85" r="0.8" fill="rgba(244,239,228,0.3)" />
      <circle cx="298" cy="62" r="0.7" fill="rgba(244,239,228,0.38)" />
      <circle cx="438" cy="74" r="0.9" fill="rgba(244,239,228,0.3)" />

      {/* Very distant peaks */}
      <path
        d="M-10 340 L55 185 L125 305 L195 145 L275 265 L355 112 L425 242 L530 158 L530 390 L-10 390Z"
        fill="#101e12"
      />

      {/* Snow */}
      <path d="M55 185L76 214L34 214Z" fill="rgba(244,239,228,0.055)" />
      <path d="M195 145L218 180L172 180Z" fill="rgba(244,239,228,0.07)" />
      <path d="M355 112L380 152L330 152Z" fill="rgba(244,239,228,0.065)" />

      {/* Mid peaks */}
      <path
        d="M-10 430 L75 262 L155 365 L238 202 L318 318 L398 182 L478 295 L530 244 L530 470 L-10 470Z"
        fill="#152717"
      />
      <path d="M238 202L262 240L214 240Z" fill="rgba(244,239,228,0.09)" />
      <path d="M398 182L420 216L376 216Z" fill="rgba(244,239,228,0.08)" />

      {/* Foreground */}
      <path
        d="M-10 508 L95 322 L185 435 L285 262 L385 382 L475 302 L530 348 L530 548 L-10 548Z"
        fill="#1B3820"
      />
      <path d="M285 262L315 304L255 304Z" fill="rgba(244,239,228,0.14)" />

      {/* Ridgeline */}
      <path
        d="M-10 508 L95 322 L185 435 L285 262 L385 382 L475 302 L530 348"
        fill="none"
        stroke="rgba(62,114,80,0.35)"
        strokeWidth="0.8"
      />

      {/* Valley */}
      <path
        d="M-10 548 C80 510,160 528,260 513 C360 498,440 520,530 506 L530 640 L-10 640Z"
        fill="#1B3820"
      />

      {/* Terrace */}
      <path
        d="M0 572 Q130 558 260 567 Q390 576 530 560"
        fill="none"
        stroke="rgba(62,114,80,0.28)"
        strokeWidth="0.6"
      />
      <path
        d="M0 588 Q130 575 260 582 Q390 590 530 576"
        fill="none"
        stroke="rgba(62,114,80,0.22)"
        strokeWidth="0.5"
      />
      <path
        d="M0 604 Q130 594 260 599 Q390 604 530 594"
        fill="none"
        stroke="rgba(62,114,80,0.18)"
        strokeWidth="0.4"
      />

      {/* Hemp stalks */}
      <g opacity="0.55">
        <line
          x1="58"
          y1="548"
          x2="56"
          y2="488"
          stroke="#2C5438"
          strokeWidth="1.5"
        />
        <line
          x1="56"
          y1="498"
          x2="44"
          y2="484"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <line
          x1="56"
          y1="512"
          x2="68"
          y2="498"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <ellipse cx="56" cy="486" rx="3.5" ry="6" fill="#2C5438" />
      </g>

      <g opacity="0.6">
        <line
          x1="115"
          y1="552"
          x2="113"
          y2="492"
          stroke="#2C5438"
          strokeWidth="1.5"
        />
        <line
          x1="113"
          y1="503"
          x2="100"
          y2="489"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <line
          x1="113"
          y1="516"
          x2="126"
          y2="503"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <ellipse cx="113" cy="490" rx="3.5" ry="6" fill="#2C5438" />
      </g>

      <g opacity="0.5">
        <line
          x1="398"
          y1="546"
          x2="396"
          y2="486"
          stroke="#2C5438"
          strokeWidth="1.5"
        />
        <line
          x1="396"
          y1="497"
          x2="383"
          y2="483"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <line
          x1="396"
          y1="510"
          x2="410"
          y2="497"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <ellipse cx="396" cy="484" rx="3.5" ry="6" fill="#2C5438" />
      </g>

      <g opacity="0.62">
        <line
          x1="448"
          y1="550"
          x2="446"
          y2="492"
          stroke="#2C5438"
          strokeWidth="1.5"
        />
        <line
          x1="446"
          y1="503"
          x2="433"
          y2="489"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <line
          x1="446"
          y1="516"
          x2="460"
          y2="504"
          stroke="#2C5438"
          strokeWidth="1"
        />
        <ellipse cx="446" cy="490" rx="3.5" ry="6" fill="#2C5438" />
      </g>

      {/* Glow */}
      <ellipse cx="388" cy="508" rx="52" ry="16" fill="rgba(194,136,42,0.07)" />

      {/* Mist */}
      <ellipse cx="260" cy="462" rx="240" ry="20" fill="rgba(27,56,32,0.32)" />
      <ellipse cx="180" cy="488" rx="200" ry="13" fill="rgba(27,56,32,0.22)" />

      {/* Caption */}
      <text
        x="496"
        y="630"
        textAnchor="end"
        fontSize="8"
        fill="rgba(244,239,228,0.22)"
        letterSpacing="0.1em"
      >
        Bajhang, Far-Western Nepal
      </text>
    </svg>
  );
};

export default HeroVisual;
