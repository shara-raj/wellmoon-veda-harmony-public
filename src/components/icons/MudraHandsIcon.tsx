const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Hand */}
      <g className="animate-mudra-left">
        {/* Left palm outer edge */}
        <path d="M 35 95 Q 30 85 28 75 L 25 60 Q 24 50 26 40 L 30 25 Q 32 15 38 10" />
        
        {/* Left thumb */}
        <path d="M 38 10 Q 42 8 45 10 L 48 15 Q 50 20 52 30 L 55 45" />
        
        {/* Left index finger */}
        <path d="M 30 25 Q 32 20 35 18 Q 38 16 40 18 L 42 22 Q 43 28 45 35 L 48 50" />
        
        {/* Left middle finger */}
        <path d="M 26 40 Q 28 35 30 32 Q 32 30 35 32 L 37 38 Q 38 45 40 55 L 42 68" />
        
        {/* Left ring finger */}
        <path d="M 25 60 Q 27 55 30 52 Q 32 50 35 52 L 38 58 Q 40 65 42 75" />
        
        {/* Left pinky */}
        <path d="M 28 75 Q 30 70 33 68 Q 35 66 38 68 L 40 74 Q 42 80 43 88" />
        
        {/* Left wrist/cuff */}
        <path d="M 35 95 L 45 100 L 50 98" />
        <path d="M 40 95 L 50 100" />
      </g>

      {/* Right Hand */}
      <g className="animate-mudra-right">
        {/* Right palm outer edge */}
        <path d="M 85 95 Q 90 85 92 75 L 95 60 Q 96 50 94 40 L 90 25 Q 88 15 82 10" />
        
        {/* Right thumb */}
        <path d="M 82 10 Q 78 8 75 10 L 72 15 Q 70 20 68 30 L 65 45" />
        
        {/* Right index finger */}
        <path d="M 90 25 Q 88 20 85 18 Q 82 16 80 18 L 78 22 Q 77 28 75 35 L 72 50" />
        
        {/* Right middle finger */}
        <path d="M 94 40 Q 92 35 90 32 Q 88 30 85 32 L 83 38 Q 82 45 80 55 L 78 68" />
        
        {/* Right ring finger */}
        <path d="M 95 60 Q 93 55 90 52 Q 88 50 85 52 L 82 58 Q 80 65 78 75" />
        
        {/* Right pinky */}
        <path d="M 92 75 Q 90 70 87 68 Q 85 66 82 68 L 80 74 Q 78 80 77 88" />
        
        {/* Right wrist/cuff */}
        <path d="M 85 95 L 75 100 L 70 98" />
        <path d="M 80 95 L 70 100" />
      </g>
      
      {/* Center joining line */}
      <path d="M 55 45 L 60 60 L 65 45" strokeWidth="1.5" />
    </svg>
  );
};

export default MudraHandsIcon;
