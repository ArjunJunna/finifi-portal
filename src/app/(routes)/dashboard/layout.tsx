import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-y-auto">
        <Sidebar />

      <div className="flex flex-col flex-grow bg-white">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
