import { useNavigate } from "react-router-dom";
import { adminLogout } from "../adminAuth";

const AdminTopbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      <div />
      <h1 className="text-2xl mb-2">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="text-lg px-4 py-2 rounded-full border border-border hover:bg-muted"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
