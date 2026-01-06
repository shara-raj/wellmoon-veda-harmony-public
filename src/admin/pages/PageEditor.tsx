import { useState } from "react";
import { getAdminRole } from "../useAdminRole";

const PageEditor = () => {
  const role = getAdminRole();

  const [title] = useState("About Us"); // locked for editor
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (role === "admin") {
      alert("Page updated successfully");
    } else {
      alert("Page update request sent to admin for approval");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif">Edit Page</h1>
        <p className="text-muted-foreground">
          {role === "admin"
            ? "Edit page content and settings"
            : "Edit page content (admin approval required)"}
        </p>
      </div>

      {/* Page title (read-only for editor) */}
      <div>
        <label className="block text-sm mb-1">Page Title</label>
        <input
          value={title}
          disabled
          className="w-full border border-border rounded-xl px-4 py-2 
                     bg-muted text-muted-foreground cursor-not-allowed"
        />
      </div>

      {/* Content editor */}
      <div>
        <label className="block text-sm mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Edit page content here..."
          className="w-full min-h-[400px] border border-border 
                     rounded-xl px-4 py-3 resize-none 
                     focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-full bg-primary 
                     text-primary-foreground hover:opacity-90"
        >
          {role === "admin" ? "Save Changes" : "Request Approval"}
        </button>
      </div>

      {role === "editor" && (
        <p className="text-xs text-muted-foreground">
          Page updates made by editors require admin approval before publishing.
        </p>
      )}
    </div>
  );
};

export default PageEditor;
