import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // Add signup API here
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9F1] px-4 py-12">
        <Link to="/" className="absolute top-6 left-6">
          <img
            src="/images/mainlogo.png"
            alt="WellMoon Veda Logo"
            className="h-28 w-auto"
          />
        </Link>
        <div className="max-w-md w-full bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-[#e5d8c8]">
          <h2 className="text-3xl font-serif font-semibold text-center text-foreground mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#000000]/70 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#000000]/70 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#000000]/70 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-black focus:ring-2 focus:ring-primary focus:outline-none transition"
                placeholder="Create a secure password"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#d4af37]/70 text-primary-foreground hover:bg-[#d4af37]/40"
              size="lg"
            >
              Sign Up
            </Button>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
