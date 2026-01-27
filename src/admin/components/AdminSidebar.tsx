import AdminNavLink from "./AdminNavLink";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-border px-6 py-8">
      <img
        src="src/assets/images/footerbanner.png"
        alt=""
        className="mb-5 p-1 border-2 border-muted-background rounded-sm"
      />

      <nav className="space-y-4 text-sm">
        <AdminNavLink to="/admin" end>
          Dashboard
        </AdminNavLink>
        <AdminNavLink to="/admin/posts">Posts</AdminNavLink>
        <AdminNavLink to="/admin/pages">Pages</AdminNavLink>
        <AdminNavLink to="/admin/editors">Editors</AdminNavLink>
        <AdminNavLink to="/admin/requests">Approval Requests</AdminNavLink>
        <AdminNavLink to="/admin/users">Users</AdminNavLink>
        <AdminNavLink to="/admin/subscriptions">Subscriptions</AdminNavLink>
        <AdminNavLink to="/admin/settings">Settings</AdminNavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
