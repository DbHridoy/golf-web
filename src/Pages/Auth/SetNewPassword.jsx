// src/pages/auth/SetNewPassword.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import AuthLayout from "../../Components/Auth/AuthLayout";

const SetNewPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const resetCode = location.state?.resetCode || "";

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

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // if (formData.newPassword.length < 8) {
    //   setError("Password must be at least 8 characters long");
    //   return;
    // }

    if (!email) {
      setError("Email is required. Please restart the password reset process.");
      return;
    }

    if (!resetCode) {
      setError(
        "Reset code is required. Please restart the password reset process."
      );
      return;
    }

    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/successful", {
        state: {
          message: "Your password has been set successfully.",
          next: "/home",
        },
      });
    } catch (error) {
      console.error("Failed to reset password:", error);
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Set New Password"
      subtitle="Create a new password to secure your account."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
            New Password
          </label>
          <input
            name="newPassword"
            type="password"
            id="newPassword"
            placeholder="Enter your new password"
            value={formData.newPassword}
            onChange={handleChange}
            autoComplete="new-password"
            className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            required
          />

          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-1 mt-4"
          >
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="Confirm your new password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 sm:h-12 bg-[#9D4C1D] text-white px-4 rounded-md cursor-pointer text-sm sm:text-base font-semibold transition-colors hover:bg-[#8A421A] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Setting Password..." : "Set Password"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full h-11 sm:h-12 px-4 rounded-md border border-gray-300 flex items-center justify-center gap-2 cursor-pointer text-gray-700 text-sm sm:text-base hover:bg-gray-50 transition-colors"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back to Login</span>
        </button>
      </form>
    </AuthLayout>
  );
};

export default SetNewPassword;
