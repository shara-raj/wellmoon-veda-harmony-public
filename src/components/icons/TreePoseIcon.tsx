interface TreePoseIconProps {
  className?: string;
}

const TreePoseIcon = ({ className }: TreePoseIconProps) => {
  return (
    <svg
      viewBox="0 0 100 180"
      fill="none"
      stroke="#B0967E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <ellipse cx="50" cy="18" rx="10" ry="12" />
      
      {/* Neck */}
      <line x1="50" y1="30" x2="50" y2="38" />
      
      {/* Body/Torso */}
      <path d="M 50 38 Q 45 55 42 75 Q 40 90 42 105" />
      <path d="M 50 38 Q 55 55 58 75 Q 60 90 58 105" />
      
      {/* Arms in prayer position at chest */}
      <path d="M 42 50 Q 35 52 30 55 Q 28 58 30 65 Q 35 68 42 65" />
      <path d="M 58 50 Q 65 52 70 55 Q 72 58 70 65 Q 65 68 58 65" />
      <path d="M 42 65 L 50 62 L 58 65" />
      
      {/* Standing leg */}
      <path d="M 42 105 Q 40 125 38 145 Q 37 160 40 175" />
      <path d="M 58 105 Q 60 125 62 145 Q 63 160 60 175" />
      
      {/* Bent leg in tree pose */}
      <path d="M 58 105 Q 65 100 70 95 Q 73 88 72 80 Q 68 75 60 78" />
      <path d="M 70 95 Q 75 92 78 88" />
    </svg>
  );
};

export default TreePoseIcon;
