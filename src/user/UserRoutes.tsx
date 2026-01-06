import { Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import UserDashboard from "../user/pages/UserDashboard";
import MyContent from "../user/pages/MyContent";
import Subscription from "./pages/UserSubscription";
import Settings from "./pages/UserSettings";

const UserRoutes = (
  <Route path="/" element={<UserLayout />}>
    <Route path="dashboard" element={<UserDashboard />} />
    <Route path="my-content" element={<MyContent />} />
    <Route path="subscription" element={<Subscription />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default UserRoutes;
