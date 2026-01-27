import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-lg text-base transition ${
      isActive
        ? "bg-muted font-medium"
        : "text-muted-foreground hover:bg-muted hover:text-black"
    }`;

  return (
    <aside className="w-64 bg-white border-r border-border p-6">
      <img
        src="/images/footerbanner.png"
        alt=""
        className="mb-5 p-1 border-2 border-muted-background rounded-sm"
      />

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClasses}>
          Dashboard
        </NavLink>

        <NavLink to="/my-content" className={linkClasses}>
          My Content
        </NavLink>

        <NavLink to="/subscription" className={linkClasses}>
          Subscription
        </NavLink>

        <NavLink to="/settings" className={linkClasses}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default UserSidebar;
