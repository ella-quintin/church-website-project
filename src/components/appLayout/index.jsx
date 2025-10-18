import { div } from "framer-motion/client";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased">
      <Navbar />
      {/* ensure page content sits below the navbar; adjust mt-16 to match your Navbar height if needed */}
      <main className="flex-1 mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
