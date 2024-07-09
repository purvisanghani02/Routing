import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect, useState } from "react";
import { NavLink, Navigate, json, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useAuth } from "../../Contex/AuthContext ";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((item) => !item);

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const loginchange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };

  const logindone = (e) => {
    e.preventDefault();
    const registrations =
      JSON.parse(localStorage.getItem("registration")) || [];

    const user = registrations.find(
      (user) =>
        user.email === logindata.email &&
        user.password === logindata.password &&
        user.role === logindata.role
    );
    console.log("user", user);

    if (user) {
      login(logindata.role, logindata);
      // localStorage.setItem("logindata", JSON.stringify(logindata));
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    if (logindata.role === "Admin") {
      navigate("/admin");
    } else if (logindata.role === "User") {
      navigate("/user");
    } else {
      toast.error("Please register first or check your credentials.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email Address"
              name="email"
              value={logindata.email}
              onChange={loginchange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={logindata.password}
              onChange={loginchange}
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="role"
                value={logindata.role}
                label="Age"
                onChange={loginchange}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={logindone}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to="/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
