import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignInAction } from "../redux/actions/userActions";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);
  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       if (userInfo.role === 1) {
  //         navigate("/");
  //       } else {
  //         navigate("/");
  //       }
  //     }

  //     // if (isAuthenticated) {
  //     //     navigate('/user/dashboard');
  //     // }
  //   }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //  alert(JSON.stringify(values, null, 2));
      dispatch(userSignInAction(values));
      actions.resetForm();
      navigate("/");
    },
  });

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="auth_style border-style"
          sx={{ bgcolor: "#eee", padding: "30px", borderRadius: "20px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                //   flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                }}
              >
                LogIn
              </Typography>
              <Avatar sx={{ m: 1, bgcolor: "#2d2d2d" }}>
                <LockClockOutlined sx={{ color: "white" }} />
              </Avatar>
            </Box>
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "#003366",
                },
                fieldset: { borderColor: "#2d2d2d" },
              }}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{
                mb: 3,
                width: "50vh",
                "& .MuiInputBase-root": {
                  color: "#003366",
                },
                fieldset: { borderColor: "#2d2d2d" },
              }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography sx={{ color: "#003366", mb: 3 }}>
              Not a Member?
              <Link to="/register">SignUp</Link>
            </Typography>
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
