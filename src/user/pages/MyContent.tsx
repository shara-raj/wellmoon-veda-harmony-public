const contentItems = [
  {
    id: 1,
    title: "Understanding Pranayama",
    description: "Learn the basics of yogic breathing techniques.",
    access: "allowed",
  },
  {
    id: 2,
    title: "Sound Healing Basics",
    description: "Introduction to sound therapy and bowls.",
    access: "allowed",
  },
  {
    id: 3,
    title: "Hormonal Balance Yoga",
    description: "Advanced yoga for hormonal health.",
    access: "locked",
  },
  {
    id: 4,
    title: "Deep Meditation Practices",
    description: "Premium meditation guidance.",
    access: "locked",
  },
];

const MyContent = () => {
  return (
    <div className="max-w-5xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl  mb-2">My Content</h1>
        <p className="text-muted-foreground">
          Content available based on your subscription
        </p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl border p-5 ${
              item.access === "allowed"
                ? "bg-white border-border"
                : "bg-muted border-border"
            }`}
          >
            <h3 className="font-medium mb-2">{item.title}</h3>

            <p className="text-lg text-muted-foreground mb-4">
              {item.description}
            </p>

            {item.access === "allowed" ? (
              <button className="text-lg text-primary hover:underline">
                Read Now
              </button>
            ) : (
              <button
                disabled
                className="text-lg text-muted-foreground cursor-not-allowed"
              >
                Locked – Upgrade to access
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Upgrade hint */}
      <div className="bg-white rounded-2xl border border-border p-6 text-center">
        <p className="text-lg text-muted-foreground mb-2">
          Want access to all content?
        </p>
        <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
          Upgrade Your Plan
        </button>
      </div>
    </div>
  );
};

export default MyContent;
