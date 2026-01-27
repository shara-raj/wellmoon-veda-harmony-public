import { useState } from "react";

interface ForceChangePasswordModalProps {
  onSuccess: () => void;
}

const ForceChangePasswordModal = ({
  onSuccess,
}: ForceChangePasswordModalProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert("Both fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // UI-only: Later Supabase update happens here
    alert("Password changed successfully. You can now access your dashboard.");
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4">
        <h2 className="text-2xl font-serif">Change Your Password</h2>

        <p className="text-sm text-muted-foreground">
          This is your first login. You must set a new password before
          continuing.
        </p>

        <div>
          <label className="text-sm">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg bg-primary text-primary-foreground"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ForceChangePasswordModal;
