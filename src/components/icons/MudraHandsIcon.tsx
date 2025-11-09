const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="#2b2a28"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Hand */}
      <g className="animate-mudra-left origin-center">
        <path d="M 15 35 Q 15 28 18 25 L 18 18 Q 18 15 20 15 Q 22 15 22 18 L 22 20 L 22 15 Q 22 12 24 12 Q 26 12 26 15 L 26 20 L 26 14 Q 26 11 28 11 Q 30 11 30 14 L 30 25" />
        <path d="M 18 25 L 18 35 Q 18 40 22 42 L 28 42" />
      </g>
      
      {/* Right Hand */}
      <g className="animate-mudra-right origin-center">
        <path d="M 49 35 Q 49 28 46 25 L 46 18 Q 46 15 44 15 Q 42 15 42 18 L 42 20 L 42 15 Q 42 12 40 12 Q 38 12 38 15 L 38 20 L 38 14 Q 38 11 36 11 Q 34 11 34 14 L 34 25" />
        <path d="M 46 25 L 46 35 Q 46 40 42 42 L 36 42" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
