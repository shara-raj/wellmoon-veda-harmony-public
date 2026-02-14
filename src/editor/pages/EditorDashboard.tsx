const EditorDashboard = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-xl">Manage your content and pending requests</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-border p-6">
          <p className="text-lg text-muted-foreground">My Posts</p>
          <h2 className="text-3xl  mt-2">12</h2>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <p className="text-lg text-muted-foreground">Draft Posts</p>
          <h2 className="text-3xl  mt-2">4</h2>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6">
          <p className="text-lg text-muted-foreground">Page Requests Pending</p>
          <h2 className="text-3xl  mt-2">2</h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-border p-8 space-y-4">
        <h2 className="text-2xl ">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 rounded-full bg-[#d4a373] text-white hover:opacity-90">
            + Create New Post
          </button>

          <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
            View My Posts
          </button>

          <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
            Edit Pages
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          Page creation and deletion require admin approval.
        </p>
      </div>

      {/* Pending Page Requests */}
      <div className="bg-white rounded-2xl border border-border p-8 space-y-4">
        <h2 className="text-2xl ">Pending Page Requests</h2>

        <div className="flex items-center justify-between border border-border rounded-xl p-4">
          <div>
            <p className="font-medium">Add “Our Philosophy” page</p>
            <p className="text-lg text-muted-foreground">
              Awaiting admin approval
            </p>
          </div>

          <span className="px-4 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
            Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditorDashboard;
