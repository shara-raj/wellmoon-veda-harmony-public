import { useState } from "react";

interface ChangePasswordModalProps {
  onClose: () => void;
}

const ChangePasswordModal = ({ onClose }: ChangePasswordModalProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // UI-only for now
    alert("Password changed successfully.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl ">Change Password</h2>

        <div>
          <label className="text-lg">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-lg">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-lg">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-[#d4a373] text-white"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
