const EditorDashboard = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-serif mb-2">Editor Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your content and pending requests
        </p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-border">
          <p className="text-sm text-muted-foreground">My Posts</p>
          <p className="text-3xl font-serif mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border">
          <p className="text-sm text-muted-foreground">Draft Posts</p>
          <p className="text-3xl font-serif mt-2">4</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-border">
          <p className="text-sm text-muted-foreground">Page Requests Pending</p>
          <p className="text-3xl font-serif mt-2">2</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-border">
        <h2 className="text-xl font-serif mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground">
            + Create New Post
          </button>

          <button className="px-4 py-2 rounded-full border border-border">
            View My Posts
          </button>

          <button className="px-4 py-2 rounded-full border border-border">
            Edit Pages
          </button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Page creation and deletion require admin approval.
        </p>
      </div>

      {/* Pending requests */}
      <div className="bg-white p-6 rounded-2xl border border-border">
        <h2 className="text-xl font-serif mb-4">Pending Page Requests</h2>

        <ul className="space-y-4 text-sm">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium">Add “Our Philosophy” page</p>
              <p className="text-muted-foreground">Awaiting admin approval</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditorDashboard;
