import { useNavigate } from "react-router-dom";

const EditorPosts = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-serif mb-2">Posts</h1>
          <p className="text-muted-foreground">Manage blog posts and guides</p>
        </div>

        <button
          onClick={() => navigate("/editor/posts/new")}
          className="px-6 py-2 rounded-full bg-[#d4a373] text-white hover:opacity-90"
        >
          + Add New Post
        </button>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Title</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Access</th>
              <th className="text-left px-6 py-3 font-medium">Last Updated</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="border-t">
              <td className="px-6 py-4">Understanding Pranayama</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Published
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-muted">
                  Free
                </span>
              </td>
              <td className="px-6 py-4">Sep 12, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-sm text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-sm text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-t">
              <td className="px-6 py-4">Sound Healing Basics</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                  Draft
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-muted">
                  Premium
                </span>
              </td>
              <td className="px-6 py-4">Sep 10, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-sm text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-sm text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-t">
              <td className="px-6 py-4">Hormonal Balance Yoga</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Published
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-muted">
                  Basic
                </span>
              </td>
              <td className="px-6 py-4">Sep 8, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-sm text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-sm text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditorPosts;
