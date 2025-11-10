import prayingHands from "@/assets/praying-hands.png";

const MudraHandsIcon = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img 
      src={prayingHands} 
      alt="Praying hands icon" 
      className={className}
    />
  );
};

export default MudraHandsIcon;
