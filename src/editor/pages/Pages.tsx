const EditorPages = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl  mb-2">Pages</h1>
          <p className="text-muted-foreground">
            Manage static pages on your website
          </p>
        </div>

        <button className="px-6 py-2 rounded-full border border-border hover:bg-muted">
          Request New Page
        </button>
      </div>

      {/* Pages Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <table className="w-full text-lg">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Title</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Last Updated</th>
              <th className="text-right px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="border-t">
              <td className="px-6 py-4 font-medium">About Us</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Published
                </span>
              </td>
              <td className="px-6 py-4">Sep 5, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-lg text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-lg text-orange-500 hover:underline">
                  Request Delete
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-t">
              <td className="px-6 py-4 font-medium">Wellness Programs</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                  Draft
                </span>
              </td>
              <td className="px-6 py-4">Sep 3, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-lg text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-lg text-orange-500 hover:underline">
                  Request Delete
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-t">
              <td className="px-6 py-4 font-medium">Contact</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Published
                </span>
              </td>
              <td className="px-6 py-4">Aug 28, 2025</td>
              <td className="px-6 py-4 text-right space-x-4">
                <button className="text-lg text-[#d4a373] hover:underline">
                  Edit
                </button>
                <button className="text-lg text-orange-500 hover:underline">
                  Request Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Note */}
      <p className="text-xs text-muted-foreground">
        Page creation and deletion require admin approval.
      </p>
    </div>
  );
};

export default EditorPages;
