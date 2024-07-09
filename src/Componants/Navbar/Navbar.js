import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  colors,
} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Navbar = ({ isloggedIn, usertype }) => {
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ flexGrow: 1 }}>
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0, display: "flex", gap: 3 }}
            >
              {isloggedIn ? (
                <>
                  {usertype === "User" ? (
                    <>
                      <NavLink
                        to="/user"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        user
                      </NavLink>
                      <NavLink
                        to="/product"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Product
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/admin"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Admin
                      </NavLink>
                    </>
                  )}
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/registration"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Registration
                  </NavLink>
                </>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
