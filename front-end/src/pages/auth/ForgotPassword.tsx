import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { ArrowLeft, Mail, KeyRound, Eye, EyeOff } from "lucide-react";

type Step = "email" | "otp" | "reset";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next input
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  return (
    <div className="space-y-6">

      {/* Back link */}
      <Link
        to="/auth/login"
        className="inline-flex items-center gap-1.5 text-sm text-[#11233E]/50 font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Sign In
      </Link>

      {/* ── STEP 1: Enter Email ── */}
      {step === "email" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="h-11 w-11 rounded-xl bg-[#11233E]/10 flex items-center justify-center mb-4">
              <Mail className="h-5 w-5 text-[#11233E]" />
            </div>
            <h2 className="text-[1.75rem] font-extrabold text-[#11233E] tracking-tight">
              Forgot Password?
            </h2>
            <p className="text-[#11233E]/60 text-sm leading-relaxed">
              No worries! Enter your email and we'll send you a reset code.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#11233E]">Email Address</label>
            <Input
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white"
            />
          </div>

          <Button
            className="w-full bg-[#11233E] text-white font-semibold rounded-xl h-11 shadow-md"
            onClick={() => setStep("otp")}
            disabled={!email}
          >
            Send Reset Code
          </Button>
        </div>
      )}

      {/* ── STEP 2: Enter OTP ── */}
      {step === "otp" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="h-11 w-11 rounded-xl bg-[#D4A34B]/15 flex items-center justify-center mb-4">
              <KeyRound className="h-5 w-5 text-[#D4A34B]" />
            </div>
            <h2 className="text-[1.75rem] font-extrabold text-[#11233E] tracking-tight">
              Enter OTP
            </h2>
            <p className="text-[#11233E]/60 text-sm leading-relaxed">
              We sent a 6-digit code to{" "}
              <span className="font-semibold text-[#11233E]">{email}</span>
            </p>
          </div>

          {/* OTP Boxes */}
          <div className="flex gap-2 justify-between">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                className="w-11 h-13 text-center text-xl font-bold text-[#11233E] border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-[#11233E] focus:bg-white transition-colors"
                style={{ height: "52px" }}
              />
            ))}
          </div>

          <Button
            className="w-full bg-[#11233E] text-white font-semibold rounded-xl h-11 shadow-md"
            onClick={() => setStep("reset")}
            disabled={otp.some((d) => !d)}
          >
            Verify Code
          </Button>

          <p className="text-center text-sm text-[#11233E]/50">
            Didn't receive the code?{" "}
            <button className="font-semibold text-[#D4A34B]">Resend</button>
          </p>
        </div>
      )}

      {/* ── STEP 3: Reset Password ── */}
      {step === "reset" && (
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="h-11 w-11 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <KeyRound className="h-5 w-5 text-green-600" />
            </div>
            <h2 className="text-[1.75rem] font-extrabold text-[#11233E] tracking-tight">
              New Password
            </h2>
            <p className="text-[#11233E]/60 text-sm">
              Choose a strong new password for your account.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#11233E]">New Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#11233E]">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-xl border-gray-200 h-11 bg-gray-50/50 focus:bg-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {confirmPassword && newPassword !== confirmPassword && (
                <p className="text-xs text-red-500 font-medium">Passwords do not match</p>
              )}
            </div>
          </div>

          <Button
            className="w-full bg-[#11233E] text-white font-semibold rounded-xl h-11 shadow-md"
            disabled={!newPassword || newPassword !== confirmPassword}
            onClick={() => navigate("/auth/login")}
          >
            Reset Password
          </Button>
        </div>
      )}
    </div>
  );
}
