import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // UI only for now (later Supabase auth)
    // After successful login:
    navigate("/editor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f7]">
      <div className="bg-white rounded-2xl border border-border p-8 w-full max-w-md space-y-6">
        <div>
          <h1 className="text-3xl  mb-2">Editor Login</h1>
          <p className="text-lg text-muted-foreground">
            Sign in to manage your content
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-lg">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 mt-1"
              placeholder="editor@wellmoon.com"
            />
          </div>

          <div>
            <label className="text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#d4a373] text-white hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          This login is only for Editors. If you are an Admin or User, please
          use your respective login pages.
        </p>
      </div>
    </div>
  );
};

export default EditorLogin;
