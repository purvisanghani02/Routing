import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  const [usertype, setUsertype] = useState(
    localStorage.getItem("usertype") || ""
  );
  const [Logindata, setLogindata] = useState(
    JSON.parse(localStorage.getItem("logindata")) || {}
  );

  const login = (role, user) => {
    console.log("loginuser", user);
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("usertype", role);
    localStorage.setItem("logindata", JSON.stringify(user));
    setIsLoggedIn(true);
    setUsertype(role);
    setLogindata(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("usertype");
    localStorage.removeItem("logindata");
    setIsLoggedIn(false);
    setUsertype("");
    setLogindata({});
  };

  return (
    <AuthContext.Provider
      value={{ isloggedIn, usertype, login, logout, Logindata }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
