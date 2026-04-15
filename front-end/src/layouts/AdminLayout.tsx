import { Outlet, Navigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { Header } from "../components/Header";
import { storage } from "../lib/storage";

export function AdminLayout() {
  // Simple mock auth check for admin layout
  const isAuthenticated = storage.get("admin_auth", false);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
