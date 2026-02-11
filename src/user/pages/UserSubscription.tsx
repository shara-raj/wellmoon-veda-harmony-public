const UserSubscription = () => {
  return (
    <div className="max-w-5xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl  mb-2">Subscription</h1>
        <p className="text-muted-foreground">Manage your plan and access</p>
      </div>

      {/* Current plan */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-lg text-muted-foreground">Current Plan</p>
            <p className="text-2xl  mt-1">Basic Plan</p>
          </div>

          <span className="inline-block text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
            Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div>
            <p className="text-lg text-muted-foreground">Started On</p>
            <p className="mt-1">20 Aug 2025</p>
          </div>

          <div>
            <p className="text-lg text-muted-foreground">Valid Till</p>
            <p className="mt-1">20 Sep 2025</p>
          </div>

          <div>
            <p className="text-lg text-muted-foreground">Billing Cycle</p>
            <p className="mt-1">Monthly</p>
          </div>
        </div>
      </div>

      {/* Plan benefits */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h2 className="text-xl  mb-4">Your Plan Includes</h2>

        <ul className="space-y-3 text-lg text-muted-foreground">
          <li>✔ Access to basic wellness articles</li>
          <li>✔ Guided breathing & sound healing content</li>
          <li>✔ Limited premium articles</li>
          <li>✔ Access from any device</li>
        </ul>
      </div>

      {/* Upgrade section */}
      <div className="bg-muted rounded-2xl border border-border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg  mb-1">Want full access?</h3>
          <p className="text-lg text-muted-foreground">
            Upgrade to Premium to unlock all content and future programs.
          </p>
        </div>

        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90">
          Upgrade to Premium
        </button>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        You can upgrade or change your plan at any time.
      </p>
    </div>
  );
};

export default UserSubscription;
