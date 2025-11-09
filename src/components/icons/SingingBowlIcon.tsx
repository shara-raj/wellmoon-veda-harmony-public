const SingingBowlIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
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
      {/* Singing Bowl */}
      <ellipse cx="32" cy="42" rx="16" ry="4" fill="none" />
      <path d="M 16 42 Q 16 35 20 32 L 44 32 Q 48 35 48 42" />
      <ellipse cx="32" cy="32" rx="12" ry="2" fill="none" />
      
      {/* Stick - with animation */}
      <g className="animate-bowl-stick origin-center">
        <line x1="42" y1="20" x2="46" y2="16" strokeWidth="2" />
        <circle cx="46.5" cy="15.5" r="2" fill="#2b2a28" />
      </g>
    </svg>
  );
};

export default SingingBowlIcon;
