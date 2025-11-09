const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="#333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Hand - Palm cupped and tilted inward */}
      <g className="animate-mudra-left">
        {/* Thumb */}
        <path d="M 35 68 Q 30 65 28 60 L 27 52 Q 27 48 29 47 Q 31 47 32 50 L 34 58 Q 35 63 35 65" />
        
        {/* Index finger */}
        <path d="M 37 40 Q 37 35 38 32 Q 39 28 41 28 Q 43 28 43 32 L 43 50 Q 43 58 42 62" />
        
        {/* Middle finger */}
        <path d="M 42 35 Q 42 30 43 26 Q 44 22 46 22 Q 48 22 48 26 L 48 50 Q 48 60 47 65" />
        
        {/* Ring finger */}
        <path d="M 47 38 Q 47 33 48 30 Q 49 26 51 26 Q 53 26 53 30 L 53 52 Q 53 60 52 64" />
        
        {/* Pinky */}
        <path d="M 52 42 Q 52 38 53 35 Q 54 32 56 32 Q 58 32 58 35 L 58 55 Q 58 60 57 63" />
        
        {/* Palm outline */}
        <path d="M 35 68 Q 36 70 38 72 L 50 78 Q 53 79 56 78 L 57 77 Q 58 75 58 72 L 58 65" />
        <path d="M 42 62 Q 43 64 45 65" />
        <path d="M 47 65 L 50 67" />
        <path d="M 52 64 L 54 66" />
      </g>
      
      {/* Right Hand - Mirror of left, palm cupped and tilted inward */}
      <g className="animate-mudra-right">
        {/* Thumb */}
        <path d="M 85 68 Q 90 65 92 60 L 93 52 Q 93 48 91 47 Q 89 47 88 50 L 86 58 Q 85 63 85 65" />
        
        {/* Index finger */}
        <path d="M 83 40 Q 83 35 82 32 Q 81 28 79 28 Q 77 28 77 32 L 77 50 Q 77 58 78 62" />
        
        {/* Middle finger */}
        <path d="M 78 35 Q 78 30 77 26 Q 76 22 74 22 Q 72 22 72 26 L 72 50 Q 72 60 73 65" />
        
        {/* Ring finger */}
        <path d="M 73 38 Q 73 33 72 30 Q 71 26 69 26 Q 67 26 67 30 L 67 52 Q 67 60 68 64" />
        
        {/* Pinky */}
        <path d="M 68 42 Q 68 38 67 35 Q 66 32 64 32 Q 62 32 62 35 L 62 55 Q 62 60 63 63" />
        
        {/* Palm outline */}
        <path d="M 85 68 Q 84 70 82 72 L 70 78 Q 67 79 64 78 L 63 77 Q 62 75 62 72 L 62 65" />
        <path d="M 78 62 Q 77 64 75 65" />
        <path d="M 73 65 L 70 67" />
        <path d="M 68 64 L 66 66" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
