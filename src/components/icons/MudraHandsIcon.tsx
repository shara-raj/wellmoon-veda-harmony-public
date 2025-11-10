const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Hand */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left outer palm curve */}
        <path d="M 32 100 Q 22 90 18 75 Q 15 60 17 45 Q 20 30 25 20 Q 28 12 35 8" />
        
        {/* Left thumb */}
        <path d="M 35 8 Q 40 5 45 8 Q 48 12 50 20 Q 52 30 54 42" />
        
        {/* Left inner fingers */}
        <path d="M 25 20 Q 30 10 38 8" />
        <path d="M 38 8 L 40 25" />
        <path d="M 42 25 L 44 8 L 46 8 L 48 25" />
      </g>

      {/* Right Hand */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Right outer palm curve */}
        <path d="M 88 100 Q 98 90 102 75 Q 105 60 103 45 Q 100 30 95 20 Q 92 12 85 8" />
        
        {/* Right thumb */}
        <path d="M 85 8 Q 80 5 75 8 Q 72 12 70 20 Q 68 30 66 42" />
        
        {/* Right inner fingers */}
        <path d="M 95 20 Q 90 10 82 8" />
        <path d="M 82 8 L 80 25" />
        <path d="M 78 25 L 76 8 L 74 8 L 72 25" />
      </g>

      {/* Center touching palms */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 54 42 L 60 60 L 66 42" />
        <path d="M 48 25 L 60 45 L 72 25" />
      </g>

      {/* Left wrist cuff */}
      <g fill="currentColor">
        <rect x="28" y="95" width="30" height="12" rx="2" transform="rotate(-25 43 101)" />
      </g>

      {/* Right wrist cuff */}
      <g fill="currentColor">
        <rect x="62" y="95" width="30" height="12" rx="2" transform="rotate(25 77 101)" />
      </g>

      {/* Cuff outlines */}
      <g stroke="currentColor" strokeWidth="2" fill="none">
        <rect x="28" y="95" width="30" height="12" rx="2" transform="rotate(-25 43 101)" />
        <rect x="62" y="95" width="30" height="12" rx="2" transform="rotate(25 77 101)" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
