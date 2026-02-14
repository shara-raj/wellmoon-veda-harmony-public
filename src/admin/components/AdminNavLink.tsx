import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  end?: boolean;
};

const AdminNavLink = ({ to, children, end = false }: Props) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `block px-3 py-2 font-body text-lg rounded-md transition ${
          isActive
            ? "bg-muted text-black"
            : "text-muted-foreground hover:text-black hover:bg-muted"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default AdminNavLink;
