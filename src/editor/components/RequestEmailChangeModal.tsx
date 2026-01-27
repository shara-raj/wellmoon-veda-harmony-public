import { useState } from "react";

interface RequestEmailChangeModalProps {
  onClose: () => void;
  onSubmit: (data: { newEmail: string; reason: string }) => void;
}

const RequestEmailChangeModal = ({
  onClose,
  onSubmit,
}: RequestEmailChangeModalProps) => {
  const [newEmail, setNewEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (!newEmail || !reason) {
      alert("Please fill in both fields.");
      return;
    }

    onSubmit({ newEmail, reason });
    onClose();
    alert("Your request has been sent to the admin for approval.");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-serif">Request Email Change</h2>

        <p className="text-sm text-muted-foreground">
          Enter your new email address and explain why you want to change it.
          The admin must approve this request.
        </p>

        <div>
          <label className="text-sm">New Email Address</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Reason for Change</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full border border-border rounded-lg px-3 py-2 mt-1 resize-none"
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
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestEmailChangeModal;
