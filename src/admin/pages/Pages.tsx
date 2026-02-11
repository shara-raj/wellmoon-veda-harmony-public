import React from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    id: 1,
    title: "About Us",
    status: "Published",
    updatedAt: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "Wellness Programs",
    status: "Draft",
    updatedAt: "Sep 3, 2025",
  },
  {
    id: 3,
    title: "Contact",
    status: "Published",
    updatedAt: "Aug 28, 2025",
  },
];

const Pages = () => {
  const navigate = useNavigate();

  const handleRequest = (message: string) => {
    alert(message); // placeholder for approval flow
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl ">Pages</h1>
          <p className="text-muted-foreground">
            Manage static pages on your website
          </p>
        </div>

        {/* Add / Request Page */}

        <button
          className="px-5 py-2 rounded-full bg-primary text-primary-foreground 
                       text-lg hover:opacity-90 transition"
        >
          + Add New Page
        </button>
      </div>

      {/* Pages table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-lg">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Updated</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr
                key={page.id}
                className="border-b last:border-0 hover:bg-muted/40 transition"
              >
                <td className="px-6 py-4 font-medium">{page.title}</td>

                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      page.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {page.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-muted-foreground">
                  {page.updatedAt}
                </td>

                <td className="px-6 py-4 text-right space-x-3">
                  {/* Edit – allowed for both */}
                  <button
                    onClick={() => navigate(`/admin/pages/${page.id}/edit`)}
                    className="text-lg text-primary hover:underline"
                  >
                    Edit
                  </button>

                  {/* Delete / Request Delete */}
                  <button className="text-lg text-destructive hover:underline">
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

export default Pages;
