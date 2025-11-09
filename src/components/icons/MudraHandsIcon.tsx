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
        <path d="M 44 40 L 44 75 Q 44 78 46 78 L 49 78 Q 49.5 78 49.5 75 L 49.5 40" />
        {/* Thumb */}
        <path d="M 44 50 Q 41 48 41 45 L 41 42 Q 41 40 42.5 40 Q 44 40 44 42 L 44 45" />
        {/* Index finger */}
        <path d="M 45 40 L 45 25 Q 45 22 46.5 22 Q 48 22 48 25 L 48 40" />
        {/* Middle finger */}
        <path d="M 47 40 L 47 20 Q 47 17 48.5 17 Q 50 17 50 20 L 50 40" />
        {/* Ring finger */}
        <path d="M 49 40 L 49 25 Q 49 22 50.5 22 Q 52 22 52 25 L 52 40" />
      </g>
      
      {/* Right Hand in Namaskara */}
      <g className="animate-mudra-right">
        {/* Palm */}
        <path d="M 56 40 L 56 75 Q 56 78 54 78 L 51 78 Q 50.5 78 50.5 75 L 50.5 40" />
        {/* Thumb */}
        <path d="M 56 50 Q 59 48 59 45 L 59 42 Q 59 40 57.5 40 Q 56 40 56 42 L 56 45" />
        {/* Index finger */}
        <path d="M 55 40 L 55 25 Q 55 22 53.5 22 Q 52 22 52 25 L 52 40" />
        {/* Middle finger */}
        <path d="M 53 40 L 53 20 Q 53 17 51.5 17 Q 50 17 50 20 L 50 40" />
        {/* Ring finger */}
        <path d="M 51 40 L 51 25 Q 51 22 49.5 22 Q 48 22 48 25 L 48 40" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;