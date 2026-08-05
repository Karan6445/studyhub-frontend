import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Get token from localStorage
  const token = localStorage.getItem("adminToken");

  // If token is missing, redirect to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Token exists, render child routes
  return <Outlet />;
};

export default ProtectedRoute;