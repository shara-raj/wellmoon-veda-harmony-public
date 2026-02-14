const UserDashboard = () => {
  return (
    <div className="max-w-5xl space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-muted-foreground">
          Access your subscribed wellness content
        </h2>
      </div>

      {/* Subscription status */}
      <div className="bg-white rounded-2xl border border-border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-lg text-muted-foreground">Current Plan</p>
          <p className="text-2xl  mt-1">Basic Plan</p>
        </div>

        <div>
          <p className="text-lg text-muted-foreground">Valid till</p>
          <p className="font-body text-lg mt-1">20 Sep 2025</p>
        </div>

        <button
          className="px-5 py-2 rounded-full border border-border 
                     hover:bg-muted transition"
        >
          Upgrade Plan
        </button>
      </div>

      {/* Available content */}
      <div>
        <h2 className="text-2xl  mb-4">Available Content</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content card */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-medium mb-2">Understanding Pranayama</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Learn the basics of breathing techniques.
            </p>
            <button className="text-lg text-primary hover:underline">
              Read
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-medium mb-2">Sound Healing Basics</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Introduction to sound therapy and bowls.
            </p>
            <button className="text-lg text-primary hover:underline">
              Read
            </button>
          </div>

          {/* Locked content */}
          <div className="bg-muted rounded-2xl border border-border p-5">
            <h3 className="font-medium mb-2">Hormonal Balance Yoga</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Premium content – upgrade to access.
            </p>
            <button
              disabled
              className="text-lg text-muted-foreground cursor-not-allowed"
            >
              Locked
            </button>
          </div>
        </div>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        Content availability depends on your subscription plan.
      </p>
    </div>
  );
};

export default UserDashboard;
