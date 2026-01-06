import { getAdminRole } from "../useAdminRole";
import AdminDashboard from "./AdminDashboard";
import EditorDashboard from "./EditorDashboard";

const Dashboard = () => {
  const role = getAdminRole();

  return role === "editor" ? <EditorDashboard /> : <AdminDashboard />;
};

export default Dashboard;
