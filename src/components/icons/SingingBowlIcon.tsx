const SingingBowlIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
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
      {/* Concentric circles - sound waves */}
      <circle cx="60" cy="60" r="8" />
      <circle cx="60" cy="60" r="16" />
      <circle cx="60" cy="60" r="24" />
      <circle cx="60" cy="60" r="32" />
      
      {/* Mallet/striker from lower right - with animation */}
      <g className="animate-bowl-stick">
        {/* Mallet head (closer to bowl) */}
        <circle cx="75" cy="75" r="3" fill="#333" />
        {/* Handle (extending outward) */}
        <line x1="75" y1="75" x2="88" y2="88" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default SingingBowlIcon;
