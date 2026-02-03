import mobile from "../../assets/mobile.png";
import glfLogo from "../../assets/Logo.svg";
import bgImage from "../../assets/bg-image.jpg";

const AuthLayout = ({ title, subtitle, headerExtra, children, footer }) => {
  return (
    <div className="min-h-screen bg-white flex overflow-hidden text-[#5C526D]">
      <div
        className="hidden lg:flex flex-1 items-center justify-center px-4 md:px-8 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={mobile}
            alt="Decorative mobile mockup"
            className="h-[850px] w-[380px] rounded-2xl object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 bg-[#F7F2EC] min-h-full">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-2">
                <img
                  src={glfLogo}
                  alt="GLF Logo"
                  className="h-[158px] w-[205px] object-contain"
                />
              </div>
              {headerExtra}
              {title && (
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-sm sm:text-base text-gray-600">{subtitle}</p>
              )}
            </div>

            {children}

            {footer && <div className="mt-6">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
