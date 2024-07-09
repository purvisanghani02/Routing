import React, { useEffect } from "react";
import { useAuth } from "../Contex/AuthContext ";
import { Navigate, Outlet, useNavigate } from "react-router";

const ProtectedRouteAdmin = () => {
  const { isloggedIn, usertype } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isloggedIn && usertype !== "Admin") {
      navigate(-1);
    }
  }, [isloggedIn, usertype, navigate]);

  if (!isloggedIn) {
    return <Navigate to="/login" />;
  }

  if (usertype === "Admin") {
    return <Outlet />;
  }
};

export default ProtectedRouteAdmin;
