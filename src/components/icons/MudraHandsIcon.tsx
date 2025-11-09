const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="#F5F0E8"
      stroke="#B5A391"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left Hand */}
      <g className="animate-mudra-left">
        <path d="
          M 35 75
          Q 33 75 32 73
          L 28 55
          Q 27 50 27 45
          L 27 30
          Q 27 22 30 18
          Q 32 15 35 15
          Q 37 15 38 18
          L 40 22
          Q 41 20 42 18
          Q 43 15 45 15
          Q 47 15 48 18
          Q 49 20 49 25
          L 49 35
          Q 50 30 50 28
          Q 50 25 51 23
          Q 52 20 54 20
          Q 56 20 57 23
          L 58 28
          L 58 35
          L 57 50
          Q 56 60 53 68
          Q 51 73 48 75
          L 35 75
          Z
        " />
        {/* Thumb */}
        <path d="
          M 32 55
          Q 30 54 28 52
          L 25 45
          Q 24 42 24 40
          Q 24 37 26 36
          Q 28 35 30 37
          L 32 42
        " />
      </g>
      
      {/* Right Hand */}
      <g className="animate-mudra-right">
        <path d="
          M 65 75
          Q 67 75 68 73
          L 72 55
          Q 73 50 73 45
          L 73 30
          Q 73 22 70 18
          Q 68 15 65 15
          Q 63 15 62 18
          L 60 22
          Q 59 20 58 18
          Q 57 15 55 15
          Q 53 15 52 18
          Q 51 20 51 25
          L 51 35
          Q 50 30 50 28
          Q 50 25 49 23
          Q 48 20 46 20
          Q 44 20 43 23
          L 42 28
          L 42 35
          L 43 50
          Q 44 60 47 68
          Q 49 73 52 75
          L 65 75
          Z
        " />
        {/* Thumb */}
        <path d="
          M 68 55
          Q 70 54 72 52
          L 75 45
          Q 76 42 76 40
          Q 76 37 74 36
          Q 72 35 70 37
          L 68 42
        " />
      </g>
    </svg>
  );
};

export default MudraHandsIcon;
