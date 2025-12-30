import { Navigate } from "react-router-dom";
import { isAdminLoggedIn } from "./adminAuth";

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
