import { useState } from "react";
import RequestEmailChangeModal from "../components/RequestEmailChangeModal";
import ChangePasswordModal from "../components/ChangePasswordModal";

const EditorSettings = () => {
  // Temporary mock data (later comes from Supabase)
  const [email] = useState("editor@wellmoon.com");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-serif mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      {/* Email Section */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="text-xl font-serif">Email Address</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Current email</p>
            <p className="font-medium">{email}</p>
          </div>

          <button
            onClick={() => setShowEmailModal(true)}
            className="px-5 py-2 rounded-full border border-border hover:bg-muted"
          >
            Request Email Change
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
        <h2 className="text-xl font-serif">Password</h2>

        <p className="text-sm text-muted-foreground">
          You can change your password at any time for security.
        </p>

        <button
          onClick={() => setShowPasswordModal(true)}
          className="px-5 py-2 rounded-full bg-[#d4a373] text-white hover:opacity-90"
        >
          Change Password
        </button>
      </div>

      {/* Email Change Modal */}
      {showEmailModal && (
        <RequestEmailChangeModal
          onClose={() => setShowEmailModal(false)}
          onSubmit={(data) => {
            console.log("Email change request:", data);
          }}
        />
      )}

      {/*Password change Modal*/}
      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
    </div>
  );
};

export default EditorSettings;
