const users = [
  {
    id: 1,
    name: "Shara Raj",
    email: "shara@example.com",
    role: "Admin",
    status: "Active",
    joinedAt: "Aug 10, 2025",
  },
  {
    id: 2,
    name: "Content Editor",
    email: "editor@wellmoon.com",
    role: "Editor",
    status: "Active",
    joinedAt: "Aug 22, 2025",
  },
  {
    id: 3,
    name: "Ananya",
    email: "ananya@gmail.com",
    role: "User",
    status: "Active",
    joinedAt: "Sep 1, 2025",
  },
];

const Users = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif">Users</h1>
        <p className="text-muted-foreground">
          Manage administrators, editors, and users
        </p>
      </div>

      {/* Users table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-0 hover:bg-muted/40 transition"
              >
                <td className="px-6 py-4 font-medium">{user.name}</td>

                <td className="px-6 py-4 text-muted-foreground">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-700"
                        : user.role === "Editor"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-muted-foreground">
                  {user.joinedAt}
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    disabled
                    className="text-sm text-muted-foreground cursor-not-allowed"
                  >
                    Edit Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Helper note */}
      <p className="text-xs text-muted-foreground">
        Role and permission management will be enabled after backend
        integration.
      </p>
    </div>
  );
};

export default Users;
