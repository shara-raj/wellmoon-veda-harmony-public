const SingingBowlIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
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
      {/* Outer circle */}
      <circle cx="45" cy="55" r="25" />
      {/* Middle circle */}
      <circle cx="45" cy="55" r="18" />
      {/* Inner circle */}
      <circle cx="45" cy="55" r="10" />
      
      {/* Stick/Mallet - with animation */}
      <g className="animate-bowl-stick" style={{ transformOrigin: '58px 42px' }}>
        <line x1="58" y1="42" x2="72" y2="28" strokeWidth="2.5" />
        <circle cx="73" cy="27" r="3" fill="#2b2a28" stroke="#2b2a28" />
      </g>
    </svg>
  );
};

export default SingingBowlIcon;
