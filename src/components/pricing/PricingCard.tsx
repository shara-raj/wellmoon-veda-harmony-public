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
        ${highlighted ? "border-foreground bg-[#c1a88d]/85" : "bg-[#c1a88d]/55"}
      `}
    >
      <h2 className="font-serif text-2xl">{title}</h2>
      <p className="text-3xl font-medium">{price}</p>
      <p className="text-sm text-muted-foreground">{description}</p>

      <ul className="space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-lg border py-3
      ${
        highlighted
          ? "bg-[#FFF9F1] hover:bg-white"
          : "bg-white hover:bg-[#FFF9F1]"
      }`}
      >
        Get Started
      </button>
    </div>
  );
}
