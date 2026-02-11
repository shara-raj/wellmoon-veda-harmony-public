type Props = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}: Props) {
  return (
    <div
      className={`
        rounded-2xl border p-8 space-y-6
        ${
          highlighted
            ? "border-foreground bg-[#c1a88d]/70 ring-black ring-1 scale-105 hover:bg-[#c1a88d]/45"
            : "bg-[#c1a88d]/65 hover:bg-[#c1a88d]/45"
        }
      `}
    >
      <h2 className=" text-2xl">{title}</h2>
      <p className="text-3xl font-medium">{price}</p>
      <p className="text-lg text-muted-foreground">{description}</p>

      <ul className="space-y-2 text-lg">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-lg border py-3
      ${
        highlighted
          ? "bg-[#faf2e8] hover:bg-white"
          : "bg-white hover:bg-[#faf2e8]"
      }`}
      >
        Get Started
      </button>
    </div>
  );
}
