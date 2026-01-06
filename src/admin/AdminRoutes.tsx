import { Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";

import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Pages from "./pages/Pages";
import Users from "./pages/Users";
import Subscriptions from "./pages/Subscriptions";
import Settings from "./pages/Settings";
import PostEditor from "./pages/PostEditor";
import PageEditor from "./pages/PageEditor";

const AdminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="posts" element={<Posts />} />
    <Route path="pages" element={<Pages />} />
    <Route path="users" element={<Users />} />
    <Route path="subscriptions" element={<Subscriptions />} />
    <Route path="settings" element={<Settings />} />
    <Route path="posts/new" element={<PostEditor />} />
    <Route path="posts/:id/edit" element={<PostEditor />} />
    <Route path="pages/:id/edit" element={<PageEditor />} />
  </Route>
);

export default AdminRoutes;
