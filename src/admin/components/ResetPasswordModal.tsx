import { useState } from "react";

interface ResetPasswordModalProps {
  editorName: string;
  onClose: () => void;
  onReset: (newPassword: string) => void;
}

const generatePassword = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const ResetPasswordModal = ({
  editorName,
  onClose,
  onReset,
}: ResetPasswordModalProps) => {
  const [password] = useState(generatePassword());

  const handleReset = () => {
    onReset(password);
    onClose();
    alert(
      `New temporary password for ${editorName}: ${password}\nPlease copy and share securely.`,
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl ">Reset Password</h2>

        <p className="text-lg text-muted-foreground">
          A new temporary password will be generated for{" "}
          <strong>{editorName}</strong>. The editor will be required to change
          it on their next login.
        </p>

        <div>
          <label className="text-lg">New Temporary Password</label>
          <div className="flex items-center gap-2 mt-1">
            <input
              value={password}
              disabled
              className="flex-1 border border-border rounded-lg px-3 py-2 bg-muted"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="px-3 py-2 border border-border rounded-lg text-lg"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-border"
          >
            Cancel
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
