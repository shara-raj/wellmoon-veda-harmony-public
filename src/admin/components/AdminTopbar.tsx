import { useNavigate } from "react-router-dom";
import { adminLogout } from "../adminAuth";
import { getAdminRole, setAdminRole } from "../useAdminRole";
import { useState } from "react";

const AdminTopbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(getAdminRole());

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  const switchRole = (newRole: "admin" | "editor") => {
    setAdminRole(newRole);
    setRole(newRole);
    window.location.reload(); // refresh UI safely
  };

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
      <div />

      <div className="flex items-center gap-4">
        {/* Role switcher (DEMO ONLY) */}
        <select
          value={role}
          onChange={(e) => switchRole(e.target.value as any)}
          className="border border-border rounded-md px-2 py-1 text-sm"
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>

        <button
          onClick={handleLogout}
          className="text-sm px-4 py-2 rounded-full border border-border hover:bg-muted"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
