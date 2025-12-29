import { useNavigate } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "Understanding Pranayama",
    status: "Published",
    access: "Free",
    updatedAt: "Sep 12, 2025",
  },
  {
    id: 2,
    title: "Sound Healing Basics",
    status: "Draft",
    access: "Premium",
    updatedAt: "Sep 10, 2025",
  },
  {
    id: 3,
    title: "Hormonal Balance Yoga",
    status: "Published",
    access: "Basic",
    updatedAt: "Sep 8, 2025",
  },
];

const Posts = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif">Posts</h1>
          <p className="text-muted-foreground">Manage blog posts and guides</p>
        </div>

        <button
          onClick={() => navigate("/admin/posts/new")}
          className="px-5 py-2 rounded-full bg-primary text-primary-foreground 
                     text-sm hover:opacity-90 transition"
        >
          + Add New Post
        </button>
      </div>

      {/* Posts table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Access</th>
              <th className="px-6 py-4">Last Updated</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-b last:border-0 hover:bg-muted/40 transition"
              >
                <td className="px-6 py-4 font-medium">{post.title}</td>

                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted">
                    {post.access}
                  </span>
                </td>

                <td className="px-6 py-4 text-muted-foreground">
                  {post.updatedAt}
                </td>

                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-sm text-primary hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-destructive hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
