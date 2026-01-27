import { useState } from "react";

interface AddEditorModalProps {
  onClose: () => void;
  onAdd: (editor: any) => void;
}

const generatePassword = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const AddEditorModal = ({ onClose, onAdd }: AddEditorModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password] = useState(generatePassword());

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Name and Email are required");
      return;
    }

    onAdd({
      id: Date.now(),
      name,
      email,
      status: "active",
      mustChangePassword: true,
      tempPassword: password,
    });

    onClose();
    alert(`Temporary password: ${password}\nPlease copy and share securely.`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-serif">Add New Editor</h2>

        <div>
          <label className="text-sm">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Temporary Password</label>
          <div className="flex items-center gap-2 mt-1">
            <input
              value={password}
              disabled
              className="flex-1 border border-border rounded-lg px-3 py-2 bg-muted"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="px-3 py-2 border border-border rounded-lg text-sm"
            >
              Copy
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Editor must change this password on first login.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-border"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
          >
            Create Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditorModal;
