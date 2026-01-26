import { useState } from "react";
import RequestEmailChangeModal from "../components/RequestEmailChangeModal";

const EditorDashboard = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif mb-2">Editor Dashboard</h1>
        <p className="text-muted-foreground">
          Manage and update your assigned content.
        </p>
      </div>

      {/* Account section */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="text-xl font-serif">Account Settings</h2>

        <p className="text-sm text-muted-foreground">
          If you need to change your email address, you must send a request to
          the admin.
        </p>

        <button
          onClick={() => setShowEmailModal(true)}
          className="px-5 py-2 rounded-full border border-border hover:bg-muted"
        >
          Request Email Change
        </button>
      </div>

      {showEmailModal && (
        <RequestEmailChangeModal
          onClose={() => setShowEmailModal(false)}
          onSubmit={(data) => {
            console.log("Email change request:", data);
          }}
        />
      )}
    </div>
  );
};

export default EditorDashboard;
