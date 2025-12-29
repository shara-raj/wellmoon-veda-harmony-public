import { useState } from "react";

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");
  const [access, setAccess] = useState("Free");

  const handleSave = () => {
    console.log({
      title,
      content,
      status,
      access,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif">Add New Post</h1>
        <p className="text-muted-foreground">Create and manage your content</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl font-serif border border-border 
                       rounded-xl px-4 py-3 focus:outline-none 
                       focus:ring-2 focus:ring-primary/30"
          />

          {/* Content */}
          <textarea
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[400px] border border-border 
                       rounded-xl px-4 py-3 resize-none 
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-medium mb-3">Status</h3>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2"
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>

          {/* Access level */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-medium mb-3">Access Level</h3>

            <select
              value={access}
              onChange={(e) => setAccess(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2"
            >
              <option>Free</option>
              <option>Basic</option>
              <option>Premium</option>
            </select>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl border border-border p-5 space-y-3">
            <button
              onClick={handleSave}
              className="w-full py-2 rounded-full bg-primary 
                         text-primary-foreground hover:opacity-90"
            >
              Save
            </button>

            <button
              onClick={handleSave}
              className="w-full py-2 rounded-full border border-border 
                         hover:bg-muted"
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
