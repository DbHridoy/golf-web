import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/Auth/AuthLayout";
import golfClub from "../../assets/golfClub.svg";
import golfer from "../../assets/golfer.svg";
const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("club");
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Choose Your Role"
      subtitle="Select the account type you want to create."
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
      <div className="flex justify-center gap-6 mt-2">
        <button
          type="button"
          onClick={() => setSelectedRole("club")}
          className={`p-4 border rounded-md flex flex-col items-center gap-3 w-36 transition-colors ${
            selectedRole === "club"
              ? "bg-[#9D4C1D] border-[#9D4C1D] text-white"
              : "bg-white border-gray-300 text-gray-800"
          }`}
        >
          <img src={golfClub} alt="Golf club role" className="h-10 w-10" />
          <span className="text-base font-semibold">Club</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedRole("player")}
          className={`p-4 border rounded-md flex flex-col items-center gap-3 w-36 transition-colors ${
            selectedRole === "player"
              ? "bg-[#9D4C1D] border-[#9D4C1D] text-white"
              : "bg-white border-gray-300 text-gray-800"
          }`}
        >
          <img src={golfer} alt="Player role" className="h-10 w-10" />
          <span className="text-base font-semibold">Player</span>
        </button>
      </div>

      <div className="flex justify-center mt-6 w-full">
        <button
          type="button"
          onClick={() => navigate("/signup", { state: { role: selectedRole } })}
          className="w-full h-11 sm:h-12 bg-[#9D4C1D] text-white px-4 rounded-md cursor-pointer font-semibold transition-colors hover:bg-[#8A421A]"
        >
          Continue
        </button>
      </div>
    </AuthLayout>
  );
};

export default RoleSelection;
