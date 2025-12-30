import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../adminAuth";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMPORARY login (Supabase later)
    adminLogin();

    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f7] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-border p-8">
        <h1 className="text-2xl font-serif text-center mb-2">Admin Login</h1>

        <p className="text-sm text-muted-foreground text-center mb-8">
          This login is for administrators and editors only
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-2 
                         focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-full bg-primary 
                       text-primary-foreground hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
