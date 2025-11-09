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
      {/* Left Hand - Side view, palm facing right */}
      <g className="animate-mudra-left">
        {/* Thumb (extends forward) */}
        <path d="M 35 65 Q 32 63 30 58 Q 29 54 30 50 Q 31 48 33 49 Q 35 50 35 54 L 36 60" />
        
        {/* Fingers curved together */}
        <path d="
          M 38 35
          Q 38 30 39 27
          Q 40 24 42 24
          Q 44 24 45 27
          L 46 40
          Q 46 48 45 55
          L 44 62
          Q 43 67 42 70
          L 40 75
          Q 38 78 36 78
          L 35 77
          Q 34 75 34 72
          L 35 65
        " />
        
        {/* Inner curve of fingers */}
        <path d="M 45 55 Q 48 50 48 45 L 48 32 Q 48 28 46 27" />
        <path d="M 45 62 Q 47 60 47 55" />
      </g>
      
      {/* Right Hand - Side view, palm facing left (mirror) */}
      <g className="animate-mudra-right">
        {/* Thumb (extends forward) */}
        <path d="M 85 65 Q 88 63 90 58 Q 91 54 90 50 Q 89 48 87 49 Q 85 50 85 54 L 84 60" />
        
        {/* Fingers curved together */}
        <path d="
          M 82 35
          Q 82 30 81 27
          Q 80 24 78 24
          Q 76 24 75 27
          L 74 40
          Q 74 48 75 55
          L 76 62
          Q 77 67 78 70
          L 80 75
          Q 82 78 84 78
          L 85 77
          Q 86 75 86 72
          L 85 65
        " />
        
        {/* Inner curve of fingers */}
        <path d="M 75 55 Q 72 50 72 45 L 72 32 Q 72 28 74 27" />
        <path d="M 75 62 Q 73 60 73 55" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
