const AdminSettings = () => {
  return (
    <div className="max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl  mb-2">Admin Settings</h1>
        <p className="text-muted-foreground">
          Manage platform and administrative preferences
        </p>
      </div>

      {/* Site Information */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        <h2 className="text-xl ">Site Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg mb-1">Website Name</label>
            <input
              type="text"
              defaultValue="Wellmoon Veda Harmony"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Support Email</label>
            <input
              type="email"
              defaultValue="support@wellmoon.com"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground">
          Save Site Settings
        </button>
      </div>

      {/* Admin Account */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        <h2 className="text-xl ">Admin Account</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg mb-1">Admin Name</label>
            <input
              type="text"
              defaultValue="Shara Raj"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Admin Email</label>
            <input
              type="email"
              value="admin@wellmoon.com"
              disabled
              className="w-full border border-border rounded-xl px-4 py-2 
                         bg-muted text-muted-foreground cursor-not-allowed"
            />
          </div>
        </div>

        <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
          Update Admin Info
        </button>
      </div>

      {/* Access & Roles */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="text-xl ">Access & Roles</h2>

        <p className="text-lg text-muted-foreground">
          Role and permission management will be available after backend
          integration.
        </p>

        <div className="text-lg">
          <p>
            <strong>Admin:</strong> Full access to platform settings
          </p>
          <p>
            <strong>Editor:</strong> Content management with approval workflow
          </p>
          <p>
            <strong>User:</strong> Subscription-based content access
          </p>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl border border-red-200 p-6 space-y-4">
        <h2 className="text-xl  text-red-600">Danger Zone</h2>

        <p className="text-lg text-muted-foreground">
          Platform-level actions should be handled carefully.
        </p>

        <button
          onClick={() => alert("This action requires backend confirmation.")}
          className="px-6 py-2 rounded-full border border-red-300 
                     text-red-600 hover:bg-red-50"
        >
          Reset Platform Data
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
