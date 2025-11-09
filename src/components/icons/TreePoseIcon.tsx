interface TreePoseIconProps {
  className?: string;
}

const TreePoseIcon = ({ className }: TreePoseIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="12" cy="4" r="2" />
      
      {/* Body */}
      <path d="M12 6 L12 14" />
      
      {/* Arms raised above head in prayer position */}
      <path d="M12 6 L10 3" />
      <path d="M12 6 L14 3" />
      <path d="M10 3 L11 2" />
      <path d="M14 3 L13 2" />
      
      {/* Standing leg */}
      <path d="M12 14 L12 22" />
      
      {/* Tree pose leg - bent knee */}
      <path d="M12 14 L8 16" />
      <path d="M8 16 L9 12" />
    </svg>
  );
};

export default TreePoseIcon;
