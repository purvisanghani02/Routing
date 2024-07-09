import React, { useEffect, useState } from "react";
import "../user/user.css";
import { useNavigate } from "react-router";
import { useAuth } from "../../Contex/AuthContext ";

const Admin = () => {
  const { logout, Logindata } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (Logindata === null || Logindata === "[]") {
      return navigate("/login");
    }
  }, []);

  const logouthandlet = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="main-box">
        <div className="box">
          <div className="user_email">{Logindata?.email}</div>
          <div className="user_role">{Logindata?.role}</div>
          <button className="logout" onClick={logouthandlet}>
            logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
