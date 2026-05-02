import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export function Register() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-[2rem] font-extrabold text-[#11233E] tracking-tight">Create an account</h2>
        <p className="text-[#11233E]/60 text-base">Enter your information to get started</p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-semibold text-[#11233E]">First name</label>
            <Input id="first-name" placeholder="John" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-semibold text-[#11233E]">Last name</label>
            <Input id="last-name" placeholder="Doe" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#11233E]">Email</label>
          <Input id="email" type="email" placeholder="m@example.com" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold text-[#11233E]">Password</label>
          <Input id="password" type="password" placeholder="••••••••" className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white" />
        </div>
        <Link to="/assessment" className="block pt-2">
          <Button className="w-full bg-[#11233E] hover:bg-[#d4a34b] text-white font-semibold rounded-xl h-11 shadow-md transition-all">
            Create Account
          </Button>
        </Link>
      </div>

      <div className="text-center text-sm text-[#11233E]/60">
        Already have an account?{" "}
        <Link to="/auth/login" className="font-semibold text-[#d4a34b] hover:underline hover:text-[#c0913f]">
          Sign in
        </Link>
      </div>
    </div>
  );
}
