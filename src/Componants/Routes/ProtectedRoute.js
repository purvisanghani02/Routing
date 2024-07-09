import React from "react";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const isloggedIn = localStorage.getItem("loggedIn");

  return isloggedIn === "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
