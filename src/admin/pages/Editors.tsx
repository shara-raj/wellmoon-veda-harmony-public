import { useState } from "react";
import { MoreVertical } from "lucide-react";
import AddEditorModal from "../components/AddEditorModal";
import ResetPasswordModal from "../components/ResetPasswordModal";
import ChangeEmailModal from "../components/ChangeEmailModal";

type EditorStatus = "active" | "suspended" | "removed";

interface Editor {
  id: number;
  name: string;
  email: string;
  status: EditorStatus;
  mustChangePassword: boolean;
}

const initialEditors: Editor[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    email: "ananya.editor@wellmoon.com",
    status: "active",
    mustChangePassword: true,
  },
  {
    id: 2,
    name: "Rohit Verma",
    email: "rohit.editor@wellmoon.com",
    status: "suspended",
    mustChangePassword: false,
  },
  {
    id: 3,
    name: "Meera Nair",
    email: "meera.editor@wellmoon.com",
    status: "removed",
    mustChangePassword: false,
  },
];

const Editors = () => {
  const [editors, setEditors] = useState<Editor[]>(initialEditors);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEditor, setSelectedEditor] = useState<Editor | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const statusStyles = (status: EditorStatus) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "suspended":
        return "bg-yellow-100 text-yellow-700";
      case "removed":
        return "bg-gray-200 text-gray-600";
    }
  };

  const toggleSuspend = (id: number) => {
    setEditors((prev) =>
      prev.map((ed) =>
        ed.id === id
          ? {
              ...ed,
              status: ed.status === "suspended" ? "active" : "suspended",
            }
          : ed,
      ),
    );
  };

  const removeEditor = (id: number) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this editor? This action is reversible by admin but the editor will lose access immediately.",
    );

    if (!confirmRemove) return;

    setEditors((prev) =>
      prev.map((ed) => (ed.id === id ? { ...ed, status: "removed" } : ed)),
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl ">Editors</h1>
          <p className="text-muted-foreground">
            Manage editors and their access permissions
          </p>
        </div>

        <button
          onClick={() => {
            setShowAddModal(true);
          }}
          className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90"
        >
          + Add Editor
        </button>
      </div>

      {/* Editors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {editors.map((editor) => {
          const isRemoved = editor.status === "removed";

          return (
            <div
              key={editor.id}
              className={`relative rounded-2xl border border-border p-5 bg-white ${
                isRemoved ? "opacity-50" : ""
              }`}
            >
              {/* 3-dot menu */}
              {!isRemoved && (
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleMenu(editor.id)}
                    className="p-1 rounded-full hover:bg-muted"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenuId === editor.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-border rounded-lg shadow-md z-10 text-lg">
                      <button
                        onClick={() => {
                          setSelectedEditor(editor);
                          setShowResetModal(true);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted"
                      >
                        Reset Password
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEditor(editor);
                          setShowChangeEmailModal(true);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted"
                      >
                        Change Email
                      </button>
                      <button
                        onClick={() => {
                          toggleSuspend(editor.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted"
                      >
                        {editor.status === "suspended"
                          ? "Activate Editor"
                          : "Suspend Editor"}
                      </button>

                      <button
                        onClick={() => {
                          removeEditor(editor.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        Remove Editor
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Editor info */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{editor.name}</h3>
                <p className="text-lg text-muted-foreground">{editor.email}</p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${statusStyles(
                      editor.status,
                    )}`}
                  >
                    {editor.status.charAt(0).toUpperCase() +
                      editor.status.slice(1)}
                  </span>

                  {editor.mustChangePassword && editor.status === "active" && (
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      Password reset required
                    </span>
                  )}
                </div>
              </div>

              {isRemoved && (
                <p className="text-xs text-muted-foreground mt-4">
                  This editor has been removed and no longer has access.
                </p>
              )}

              {showAddModal && (
                <AddEditorModal
                  onClose={() => setShowAddModal(false)}
                  onAdd={(newEditor) =>
                    setEditors((prev) => [...prev, newEditor])
                  }
                />
              )}

              {showResetModal && selectedEditor && (
                <ResetPasswordModal
                  editorName={selectedEditor.name}
                  onClose={() => {
                    setShowResetModal(false);
                    setSelectedEditor(null);
                  }}
                  onReset={(newPassword) => {
                    setEditors((prev) =>
                      prev.map((ed) =>
                        ed.id === selectedEditor.id
                          ? { ...ed, mustChangePassword: true }
                          : ed,
                      ),
                    );
                    console.log("Temporary password generated:", newPassword);
                  }}
                />
              )}
              {showChangeEmailModal && selectedEditor && (
                <ChangeEmailModal
                  editorName={selectedEditor.name}
                  currentEmail={selectedEditor.email}
                  onClose={() => {
                    setShowChangeEmailModal(false);
                    setSelectedEditor(null);
                  }}
                  onSave={(newEmail) => {
                    setEditors((prev) =>
                      prev.map((ed) =>
                        ed.id === selectedEditor.id
                          ? { ...ed, email: newEmail }
                          : ed,
                      ),
                    );
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editors;
