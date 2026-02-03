import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import AuthLayout from "../../Components/Auth/AuthLayout";
import { useSendOtpMutation } from "../../redux/api/authApi";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  const handleNext = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setError("");
      await sendOtp(email).unwrap();
      navigate("/verify-otp", { state: { email } });
    } catch (error) {
      console.error("Failed to send reset code:", error);
      setError("Failed to send reset code. Please try again.");
    }
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email address and we’ll send you a reset code."
    >
      <form onSubmit={handleNext} className="space-y-6">
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setError("");
              }
            }}
            autoComplete="email"
            className="w-full h-11 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm text-sm sm:text-base focus:outline-none focus:ring-[#9D4C1D] focus:border-[#9D4C1D]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 sm:h-12 bg-[#9D4C1D] text-white px-4 rounded-md cursor-pointer text-sm sm:text-base font-semibold transition-colors hover:bg-[#8A421A] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Next"}
        </button>

        <button
          type="button"
          onClick={handleBackToLogin}
          className="w-full h-11 sm:h-12 px-4 rounded-md border border-gray-300 flex items-center justify-center gap-2 cursor-pointer text-gray-700 text-sm sm:text-base hover:bg-gray-50 transition-colors"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back to Login</span>
        </button>
      </form>
    </AuthLayout>
  );
}

export default ForgetPassword;
