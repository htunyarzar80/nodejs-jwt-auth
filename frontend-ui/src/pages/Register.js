import { Avatar, Box, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  firstname: yup
    .string("Enter your First Name")
    .min(3, "First Name should be of minimum 3 characters length")
    .required("First Name is required"),
  lastname: yup
    .string("Enter your Last Name")
    .min(3, "Last Name should be of minimum 3 characters length")
    .required("Last Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(userSignUpAction(values));
      actions.resetForm();
      navigate("/login");
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
          p: 5,
          //   color: palette.primary.oth, bgcolor: palette.primary.main
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
                SignUp
              </Typography>
              <Avatar sx={{ m: 1, bgcolor: "#003366", color: "#fff", mb: 3 }}>
                <LockOpenIcon />
              </Avatar>
            </Box>
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
              id="firstname"
              label="First Name"
              name="firstname"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              sx={{
                mb: 3,
                "& .MuiInputBase-root": {
                  color: "#003366",
                },
                fieldset: { borderColor: "#2d2d2d" },
              }}
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
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
              Already a Member?
              <Link to="/login">LogIn</Link>
            </Typography>

            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ bgcolor: "#003366", mb: 3 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
