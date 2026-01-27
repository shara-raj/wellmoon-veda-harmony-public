import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import ForceChangePasswordModal from "../components/ForceChangePasswordModal";
import EditorTopbar from "../components/EditorTopbar";

const EditorLayout = () => {
  // Temporary flag (later comes from Supabase)
  const [mustChangePassword, setMustChangePassword] = useState(true);
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-lg text-base transition ${
      isActive
        ? "bg-muted font-medium"
        : "text-muted-foreground hover:bg-muted hover:text-black"
    }`;

  return (
    <div className="min-h-screen flex bg-[#faf9f7]">
      {/* Force Password Change Modal */}
      {mustChangePassword && (
        <ForceChangePasswordModal
          onSuccess={() => setMustChangePassword(false)}
        />
      )}

      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-border p-6">
        <img
          src="src/assets/images/footerbanner.png"
          alt=""
          className="mb-5 p-1 border-2 border-muted-background rounded-sm"
        />

        <nav className="space-y-2">
          <NavLink to="/editor" end className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/editor/posts" className={linkClass}>
            Posts
          </NavLink>

          <NavLink to="/editor/pages" className={linkClass}>
            Pages
          </NavLink>

          <NavLink to="/editor/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <EditorTopbar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EditorLayout;
