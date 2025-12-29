const AdminTopbar = () => {
  const handleLogout = () => {
    // Supabase logout will go here later
    console.log("Logout clicked");
  };

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      {/* Left side (optional breadcrumb / title later) */}
      <div />

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Admin</span>

        <button
          onClick={handleLogout}
          className="text-sm px-4 py-2 rounded-full border border-border 
                     hover:bg-muted transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
