const subscriptions = [
  {
    id: 1,
    user: "Ananya",
    email: "ananya@gmail.com",
    plan: "Premium",
    status: "Active",
    startDate: "Aug 15, 2025",
    endDate: "Sep 15, 2025",
  },
  {
    id: 2,
    user: "Rohit",
    email: "rohit@gmail.com",
    plan: "Basic",
    status: "Active",
    startDate: "Aug 20, 2025",
    endDate: "Sep 20, 2025",
  },
  {
    id: 3,
    user: "Meera",
    email: "meera@gmail.com",
    plan: "Free",
    status: "Expired",
    startDate: "Jul 10, 2025",
    endDate: "Aug 10, 2025",
  },
];

const Subscriptions = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif">Subscriptions</h1>
        <p className="text-muted-foreground">
          View user subscription plans and status
        </p>
      </div>

      {/* Subscriptions table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Plan</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Start Date</th>
              <th className="px-6 py-4">End Date</th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.map((sub) => (
              <tr
                key={sub.id}
                className="border-b last:border-0 hover:bg-muted/40 transition"
              >
                <td className="px-6 py-4">
                  <p className="font-medium">{sub.user}</p>
                  <p className="text-xs text-muted-foreground">{sub.email}</p>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      sub.plan === "Premium"
                        ? "bg-purple-100 text-purple-700"
                        : sub.plan === "Basic"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {sub.plan}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      sub.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {sub.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-muted-foreground">
                  {sub.startDate}
                </td>

                <td className="px-6 py-4 text-muted-foreground">
                  {sub.endDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        Subscription management and upgrades will be enabled after payment
        integration.
      </p>
    </div>
  );
};

export default Subscriptions;
