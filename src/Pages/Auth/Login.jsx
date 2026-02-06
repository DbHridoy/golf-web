// src/pages/auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would verify credentials with your backend
      if (formData.email && formData.password) {
        navigate("/home");
      } else {
        setError("Please fill in all fields");
      }
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="To log in, enter your email and password."
      footer={
        <div className="text-center font-semibold">
          <span>Don&apos;t have an account? </span>
          <button
            type="button"
            // onClick={() => navigate("/role-selection")}
            onClick={() => navigate("/signup")}
            className="text-[#9D4C1D] text-sm cursor-pointer font-semibold"
          >
            Create Account
          </button>
        </div>
      }
    >
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              autoComplete="email"
              className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <div className="text-right mt-1">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-[#9D4C1D] cursor-pointer font-semibold"
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 sm:h-12 bg-[#9D4C1D] text-white px-4 rounded-md cursor-pointer font-semibold transition-colors hover:bg-[#8A421A] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
