import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
};

const AdminNavLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-primary"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default AdminNavLink;
