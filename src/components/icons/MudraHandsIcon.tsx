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
      <g className="animate-mudra-left">
        {/* Outer edge */}
        <path d="
          M 38 75
          L 35 73
          Q 32 70 31 65
          L 28 50
          Q 27 40 27 35
          L 27 25
          Q 27 18 30 15
          Q 32 13 35 15
          Q 37 17 37 22
          L 37 30
        " />
        {/* Inner edge */}
        <path d="
          M 45 75
          L 45 35
          Q 45 25 45 22
          Q 45 15 42 13
          Q 40 12 38 13
          Q 36 15 36 18
          L 36 25
        " />
        {/* Thumb */}
        <path d="
          M 35 55
          Q 33 53 31 50
          L 29 45
          Q 28 42 28 40
          Q 28 38 30 37
          Q 32 37 33 39
          L 35 44
        " />
        {/* Bottom */}
        <path d="M 38 75 L 45 75" />
      </g>
      
      {/* Right Hand */}
      <g className="animate-mudra-right">
        {/* Outer edge */}
        <path d="
          M 62 75
          L 65 73
          Q 68 70 69 65
          L 72 50
          Q 73 40 73 35
          L 73 25
          Q 73 18 70 15
          Q 68 13 65 15
          Q 63 17 63 22
          L 63 30
        " />
        {/* Inner edge */}
        <path d="
          M 55 75
          L 55 35
          Q 55 25 55 22
          Q 55 15 58 13
          Q 60 12 62 13
          Q 64 15 64 18
          L 64 25
        " />
        {/* Thumb */}
        <path d="
          M 65 55
          Q 67 53 69 50
          L 71 45
          Q 72 42 72 40
          Q 72 38 70 37
          Q 68 37 67 39
          L 65 44
        " />
        {/* Bottom */}
        <path d="M 62 75 L 55 75" />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
