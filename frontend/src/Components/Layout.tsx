import { useState, type ReactNode } from "react";
import Sidebar from "./SideBar";

const Layout = ({ children }:{children : ReactNode}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-[#1a1a1a] p-5 shadow-lg"> 
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">

        {/* Mobile button */}
        <button
          className="md:hidden mb-4 bg-orange-500 px-3 py-2 rounded"
          onClick={() => setShowSidebar(true)}
        >
          ☰ Menu
        </button>

        {children}
      </div>

      {/* Mobile Sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowSidebar(false)}
          ></div>

          <div className="relative w-64 h-full bg-[#1a1a1a] p-4 z-50">
            <button
              className="mb-4 text-red-400"
              onClick={() => setShowSidebar(false)}
            >
              ✖ Close
            </button>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;