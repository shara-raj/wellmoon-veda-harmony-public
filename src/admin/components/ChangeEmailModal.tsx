import { useState } from "react";

interface ChangeEmailModalProps {
  currentEmail: string;
  editorName: string;
  onClose: () => void;
  onSave: (newEmail: string) => void;
}

const ChangeEmailModal = ({
  currentEmail,
  editorName,
  onClose,
  onSave,
}: ChangeEmailModalProps) => {
  const [email, setEmail] = useState(currentEmail);

  const handleSave = () => {
    if (!email) {
      alert("Email cannot be empty");
      return;
    }

    onSave(email);
    onClose();
    alert(`Email for ${editorName} updated to ${email}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-serif">Change Editor Email</h2>

        <p className="text-sm text-muted-foreground">
          Update the email address for <strong>{editorName}</strong>.
        </p>

        <div>
          <label className="text-sm">New Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-border"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
          >
            Update Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmailModal;
