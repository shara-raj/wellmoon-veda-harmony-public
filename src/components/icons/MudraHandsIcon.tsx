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
      {/* Left Hand */}
      <g className="animate-mudra-left">
        <path d="
          M 42 80
          L 40 78
          Q 38 75 38 72
          L 38 68
          Q 38 65 39 63
          L 40 58
          Q 41 52 42 48
          L 43 42
          Q 44 36 45 32
          Q 46 28 47 26
          Q 48 24 50 24
          Q 52 24 53 26
          Q 54 28 54 32
          L 54 40
          L 54 50
          Q 54 54 53 56
          L 52 60
          Q 51 62 50 63
          Q 49 64 48 64
          Q 47 64 46 63
          L 45 62
          Q 44 60 44 58
          L 44 52
          Q 44 48 45 46
          L 46 42
          Q 47 40 48 40
        " />
        {/* Thumb */}
        <path d="
          M 40 68
          Q 38 66 36 63
          L 34 58
          Q 33 55 33 52
          Q 33 50 34 49
          Q 35 48 37 49
          Q 38 50 38 52
          L 39 58
        " />
      </g>
      
      {/* Right Hand - Horizontally flipped */}
      <g className="animate-mudra-right">
        <path d="
          M 78 80
          L 80 78
          Q 82 75 82 72
          L 82 68
          Q 82 65 81 63
          L 80 58
          Q 79 52 78 48
          L 77 42
          Q 76 36 75 32
          Q 74 28 73 26
          Q 72 24 70 24
          Q 68 24 67 26
          Q 66 28 66 32
          L 66 40
          L 66 50
          Q 66 54 67 56
          L 68 60
          Q 69 62 70 63
          Q 71 64 72 64
          Q 73 64 74 63
          L 75 62
          Q 76 60 76 58
          L 76 52
          Q 76 48 75 46
          L 74 42
          Q 73 40 72 40
        " />
        {/* Thumb */}
        <path d="
          M 80 68
          Q 82 66 84 63
          L 86 58
          Q 87 55 87 52
          Q 87 50 86 49
          Q 85 48 83 49
          Q 82 50 82 52
          L 81 58
        " />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
