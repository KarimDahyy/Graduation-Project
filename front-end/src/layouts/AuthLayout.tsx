import { Outlet, Link } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa] p-4 font-sans">
      <div className="flex w-full max-w-[950px] bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.08)] h-[550px] max-h-[85vh] relative flex-shrink-0">
        
        {/* Left Side: Illustration */}
        <div className="hidden md:flex w-[40%] bg-[#fffdf9] items-center justify-center p-8 border-r border-gray-100">
          <img 
            src="/assessment-illustration.png" 
            alt="Career Compass Illustration" 
            className="w-full h-full p-4 object-contain drop-shadow-md"
          />
        </div>

        {/* Right Side: Form Content (Login / Register) */}
        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col relative overflow-hidden">
          {/* Mobile Logo Logo */}
          <div className="md:hidden mb-6 flex justify-center w-full shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain rounded-full shadow-sm" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CareerCompass</span>
            </Link>
          </div>
          
          <div className="flex-1 flex flex-col justify-center max-w-[400px] mx-auto w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
