const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="#2b2a28"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Hand */}
      <g className="animate-mudra-left origin-center">
        {/* Palm */}
        <path d="M 25 55 L 25 75 Q 25 78 27 78 L 35 78 Q 37 78 37 75 L 37 55" />
        {/* Thumb */}
        <path d="M 25 60 Q 22 58 22 55 L 22 50 Q 22 47 24 47 Q 26 47 26 50 L 26 55" />
        {/* Index finger */}
        <path d="M 27 55 L 27 35 Q 27 32 29 32 Q 31 32 31 35 L 31 55" />
        {/* Middle finger */}
        <path d="M 31 55 L 31 30 Q 31 27 33 27 Q 35 27 35 30 L 35 55" />
        {/* Ring finger */}
        <path d="M 35 55 L 35 35 Q 35 32 37 32 Q 39 32 39 35 L 39 55" />
      </g>
      
      {/* Right Hand */}
      <g className="animate-mudra-right origin-center">
        {/* Palm */}
        <path d="M 75 55 L 75 75 Q 75 78 73 78 L 65 78 Q 63 78 63 75 L 63 55" />
        {/* Thumb */}
        <path d="M 75 60 Q 78 58 78 55 L 78 50 Q 78 47 76 47 Q 74 47 74 50 L 74 55" />
        {/* Index finger */}
        <path d="M 73 55 L 73 35 Q 73 32 71 32 Q 69 32 69 35 L 69 55" />
        {/* Middle finger */}
        <path d="M 69 55 L 69 30 Q 69 27 67 27 Q 65 27 65 30 L 65 55" />
        {/* Ring finger */}
        <path d="M 65 55 L 65 35 Q 65 32 63 32 Q 61 32 61 35 L 61 55" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
