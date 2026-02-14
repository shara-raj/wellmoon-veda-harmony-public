import { useState } from "react";

const PageEditor = () => {
  const [title] = useState("About Us"); // locked for editor
  const [content, setContent] = useState("");

  const handleSave = () => {
    alert("Page updated successfully");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl ">Edit Page</h1>
        <p className="text-muted-foreground">Edit page content and settings</p>
      </div>

      {/* Page title (read-only for editor) */}
      <div>
        <label className="block text-lg mb-1">Page Title</label>
        <input
          value={title}
          disabled
          className="w-full border border-border rounded-xl px-4 py-2 
                     bg-muted text-muted-foreground cursor-not-allowed"
        />
      </div>

      {/* Content editor */}
      <div>
        <label className="block text-lg mb-1">Content</label>
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
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PageEditor;
