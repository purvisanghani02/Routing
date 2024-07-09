import React from "react";
import Home from "../Pages/Home";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Error from "../Pages/Error";
import ProtectedRoute from "./ProtectedRoute";
import User from "../Pages/user/User";
import Admin from "../Pages/Admin/Admin";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import Product from "../Pages/user/Product";
import { useAuth } from "../Contex/AuthContext ";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteUser from "./ProtectedRouteUser";

const Routing = () => {
  const { isloggedIn, usertype } = useAuth();

  return (
    <>
      <Router>
        <Navbar isloggedIn={isloggedIn} usertype={usertype} />
        <Routes>
          {/* unauthorized-------------------- */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          {/* -------ProtectedRoute----- */}
          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<ProtectedRouteUser />}>
            <Route path="/user" element={<User />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
