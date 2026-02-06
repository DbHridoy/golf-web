// src/pages/auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";

const Signup = () => {
  const location = useLocation();
  const role = location.state?.role || "club"; // fallback role if not provided
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
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

      if (formData.email && formData.password) {
        navigate("/verify-email", { state: { email: formData.email } });
      } else {
        setError("Please fill in all fields");
      }
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }

    setLoading(false);
  };

  return (
    <AuthLayout
      title={`Create an Account`}
      subtitle="Start your journey by creating your account."
      footer={
        <div className="text-center font-semibold">
          <span>Already have an account? </span>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-[#9D4C1D] font-semibold text-sm cursor-pointer"
          >
            Login
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
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              id="fullName"
              value={formData.fullName}
              placeholder="Enter your full name"
              onChange={handleChange}
              autoComplete="name"
              className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            />
          </div>

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
              placeholder="Enter your password"
              autoComplete="new-password"
              className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 sm:h-12 bg-[#9D4C1D] text-white px-4 rounded-md hover:bg-[#8A421A] cursor-pointer font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
