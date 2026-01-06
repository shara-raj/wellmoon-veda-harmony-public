import { useNavigate } from "react-router-dom";

const UserTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Later: Supabase signOut
    navigate("/");
  };

  return (
    <header
      className="h-16 bg-white border-b border-border 
                       flex items-center justify-between px-6"
    >
      {/* Welcome note */}
      <p className="text-sm text-muted-foreground">
        Welcome back,{" "}
        <span className="font-medium text-foreground">Ananya</span> ✨
      </p>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="text-sm px-4 py-2 rounded-full 
                   border border-border hover:bg-muted transition"
      >
        Logout
      </button>
    </header>
  );
};

export default UserTopbar;
