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
      {/* Left Hand in Namaskara */}
      <g className="animate-mudra-left">
        {/* Palm */}
        <path d="M 42 40 L 42 75 Q 42 78 44 78 L 47.5 78 Q 47.5 78 47.5 75 L 47.5 40" />
        {/* Thumb */}
        <path d="M 42 50 Q 39 48 39 45 L 39 42 Q 39 40 40.5 40 Q 42 40 42 42 L 42 45" />
        {/* Index finger */}
        <path d="M 43 40 L 43 25 Q 43 22 44.5 22 Q 46 22 46 25 L 46 40" />
        {/* Middle finger */}
        <path d="M 45 40 L 45 20 Q 45 17 46.5 17 Q 48 17 48 20 L 48 40" />
        {/* Ring finger */}
        <path d="M 47 40 L 47 25 Q 47 22 48.5 22 Q 50 22 50 25 L 50 40" />
      </g>
      
      {/* Right Hand in Namaskara */}
      <g className="animate-mudra-right">
        {/* Palm */}
        <path d="M 58 40 L 58 75 Q 58 78 56 78 L 52.5 78 Q 52.5 78 52.5 75 L 52.5 40" />
        {/* Thumb */}
        <path d="M 58 50 Q 61 48 61 45 L 61 42 Q 61 40 59.5 40 Q 58 40 58 42 L 58 45" />
        {/* Index finger */}
        <path d="M 57 40 L 57 25 Q 57 22 55.5 22 Q 54 22 54 25 L 54 40" />
        {/* Middle finger */}
        <path d="M 55 40 L 55 20 Q 55 17 53.5 17 Q 52 17 52 20 L 52 40" />
        {/* Ring finger */}
        <path d="M 53 40 L 53 25 Q 53 22 51.5 22 Q 50 22 50 25 L 50 40" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;