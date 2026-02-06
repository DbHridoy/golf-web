import { useLocation, useNavigate } from "react-router-dom";
import tick from "../../assets/tick.svg";
import { FiArrowLeft } from "react-icons/fi";
import AuthLayout from "../../Components/Auth/AuthLayout";

function Successful() {
  const navigate = useNavigate();
  const location = useLocation();
  const message =
    location.state?.message || "Your password has been set successfully.";
  const nextPath = location.state?.next || "/home";

  const handleBackToLogin = () => {
    navigate(nextPath);
  };

  return (
    <AuthLayout
      title="Success!"
      subtitle={message}
      headerExtra={
        <div className="flex justify-center mt-4">
          <img
            src={tick}
            alt="Success"
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
        </div>
      }
    >
      <button
        onClick={handleBackToLogin}
        className="w-full h-11 sm:h-12 flex justify-center items-center gap-2 text-white px-4 rounded-md bg-[#9D4C1D] cursor-pointer text-sm sm:text-base font-semibold transition-colors hover:bg-[#8A421A]"
      >
        <FiArrowLeft className="h-4 w-4" />
        <span>Continue</span>
      </button>
    </AuthLayout>
  );
}

export default Successful;
