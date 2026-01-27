import { useState } from "react";

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [access, setAccess] = useState("free");

  const handleSubmit = () => {
    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    // UI-only for now
    console.log({
      title,
      slug,
      excerpt,
      content,
      status,
      access,
    });

    alert("Post saved successfully (UI only)");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-serif">Add New Post</h1>

      <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
        {/* Title */}
        <div>
          <label className="text-sm">Post Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            placeholder="Enter post title"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="text-sm">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            placeholder="post-url-slug"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="text-sm">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            rows={3}
            placeholder="Short summary for the post"
          />
        </div>

        {/* Content */}
        <div>
          <label className="text-sm">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            rows={10}
            placeholder="Write your full content here..."
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Access</label>
            <select
              value={access}
              onChange={(e) => setAccess(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 mt-1"
            >
              <option value="free">Free</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 rounded-lg border border-border">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg bg-[#d4a373] text-white"
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
