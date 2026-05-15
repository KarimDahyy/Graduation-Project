import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TopNavbar } from "../components/TopNavbar";
import { AdBanner } from "../components/AdBanner";

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-full bg-[#f5f7fa] font-sans antialiased overflow-hidden">
      <TopNavbar />
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <AdBanner />
    </div>
  );
}
