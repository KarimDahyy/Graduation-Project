import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function Login() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-[2rem] font-extrabold text-[#11233E] tracking-tight">Sign in</h2>
        <p className="text-[#11233E]/60 text-base">Enter your email and password to access your account</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#11233E]">
            Email
          </label>
          <Input id="email" type="email" placeholder="m@example.com" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-semibold text-[#11233E]">
              Password
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm font-semibold text-[#D4A34B] hover:underline hover:text-[#c0913f]"
            >
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
        </div>
        <Link to="/dashboard" className="block pt-2">
          <Button className="w-full bg-[#11233E] hover:bg-[#1c3559] text-white font-semibold rounded-xl h-11 shadow-md transition-all">
            Sign In
          </Button>
        </Link>
      </div>

      <div className="text-center text-sm text-[#11233E]/60">
        Don't have an account?{" "}
        <Link to="/auth/register" className="font-semibold text-[#D4A34B] hover:underline hover:text-[#c0913f]">
          Sign up
        </Link>
      </div>
    </div>
  );
}
