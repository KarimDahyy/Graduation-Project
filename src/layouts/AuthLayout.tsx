import { Outlet, Link } from "react-router-dom";

import { ThemeToggle } from "../components/ui/ThemeToggle";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-muted/50">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex w-full max-w-md items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="CareerCompass" className="h-8 w-8 object-contain rounded-full shadow-sm" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CareerCompass</span>
          </Link>
          <ThemeToggle />
        </div>
        <div className="w-full max-w-md space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
