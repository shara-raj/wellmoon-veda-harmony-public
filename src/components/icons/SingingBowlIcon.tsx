import singingBowl from "@/assets/singing-bowl.png";

const SingingBowlIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img 
      src={singingBowl} 
      alt="Singing bowl icon" 
      className={className}
    />
  );
};

export default SingingBowlIcon;
