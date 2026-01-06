const UserSettings = () => {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      {/* Profile information */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        <h2 className="text-xl font-serif">Profile Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Ananya Sharma"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Display Name</label>
            <input
              type="text"
              defaultValue="Ananya"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90">
          Save Changes
        </button>
      </div>

      {/* Account information */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        <h2 className="text-xl font-serif">Account Information</h2>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            value="ananya@gmail.com"
            disabled
            className="w-full border border-border rounded-xl px-4 py-2 
                       bg-muted text-muted-foreground cursor-not-allowed"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Email address cannot be changed.
          </p>
        </div>
      </div>

      {/* Password */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        <h2 className="text-xl font-serif">Change Password</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
          Update Password
        </button>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        Password changes will take effect after you save.
      </p>
      {/* Danger Zone */}
      <div className="bg-white rounded-2xl border border-red-200 p-6 space-y-4">
        <h2 className="text-xl font-serif text-red-600">Danger Zone</h2>

        <p className="text-sm text-muted-foreground">
          Deleting your account is permanent. All your data and subscriptions
          will be removed and cannot be recovered.
        </p>

        <button
          onClick={() =>
            alert(
              "Account deletion request submitted. This action cannot be undone."
            )
          }
          className="px-6 py-2 rounded-full border border-red-300 
               text-red-600 hover:bg-red-50 transition"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
