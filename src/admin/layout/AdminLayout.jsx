import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // Redirect if token doesn't exist
    if (!token) {
      navigate("/admin/login");
      return;
    }

    // Get admin info
    const adminData = localStorage.getItem("admin");

    if (adminData) {
      setAdmin(JSON.parse(adminData));
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Section */}
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">

        {/* Topbar */}
        <Topbar
          admin={admin}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main */}
        <main className="flex-1 p-5 md:p-7 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;