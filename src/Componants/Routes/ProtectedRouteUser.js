import { useEffect } from "react";
import { useAuth } from "../Contex/AuthContext ";
import { Navigate, Outlet, useNavigate } from "react-router";

const ProtectedRouteUser = () => {
  const { isloggedIn, usertype } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isloggedIn && usertype !== "User") {
      navigate(-1);
    }
  }, [isloggedIn, usertype, navigate]);

  if (!isloggedIn) {
    return <Navigate to="/login" />;
  }

  if (usertype === "User") {
    return <Outlet />;
  }
};

export default ProtectedRouteUser;
