const stats = [
  { label: "Total Posts", value: 24 },
  { label: "Draft Posts", value: 6 },
  { label: "Published Pages", value: 8 },
  { label: "Active Subscribers", value: 42 },
];

const contentHealth = [
  { label: "Posts needing review", value: 3 },
  { label: "Unpublished pages", value: 2 },
  { label: "Subscriptions expiring soon", value: 5 },
];

const recentActivity = [
  {
    title: "Understanding Pranayama",
    type: "Post",
    action: "Updated",
    date: "Sep 12, 2025",
  },
  {
    title: "Sound Healing Basics",
    type: "Post",
    action: "Created",
    date: "Sep 11, 2025",
  },
  {
    title: "About Us",
    type: "Page",
    action: "Updated",
    date: "Sep 10, 2025",
  },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl  mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your content and platform activity
        </p>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl p-6 border border-border"
          >
            <p className="text-lg text-muted-foreground">{item.label}</p>
            <p className="text-3xl  mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Content health */}
      <div>
        <h2 className="text-xl  mb-4">Content Health</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contentHealth.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <p className="text-lg text-muted-foreground">{item.label}</p>
              <p className="text-2xl  mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-xl  mb-6">Recent Activity</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-lg">
            <thead>
              <tr className="text-left text-muted-foreground border-b">
                <th className="pb-3">Title</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Action</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item) => (
                <tr key={item.title} className="border-b last:border-0">
                  <td className="py-4 font-medium">{item.title}</td>
                  <td className="py-4">{item.type}</td>
                  <td className="py-4">{item.action}</td>
                  <td className="py-4 text-muted-foreground">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
