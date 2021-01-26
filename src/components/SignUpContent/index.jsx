import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./signUpContent.scss";
import { FormHelperText, Paper } from "@material-ui/core";
import Image from "../../assets/images/login/web-logo.png";
import { NavLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ paddingBottom: "20px" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Tix.vn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(3),
    height: 50,
    width: 50,
    background: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function SignUpContent() {
  const classes = useStyles();

  const [user, setUser] = useState({
    values: {
      firstName: "",
      lastName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    valid: false,
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    let errorMessage = "";

    if (value.trim() === "") {
      errorMessage = "* Trường này không được bỏ trống";
    }

    // check email pattern
    if (type === "email") {
      const emailRegex =
        "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (!value.match(emailRegex)) {
        errorMessage = "Email không đúng định dạng!";
      }
    }

    if (name === "phone") {
      const phoneRegex = `^(0|[0-9][0-9]*).{9,11}$`;
      if (!value.match(phoneRegex)) {
        errorMessage = "* Số điện thoại không đúng định dạng!";
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        errorMessage = "Mật khẩu phải có ít nhất 6 ký tự.";
      } else if (!/([A-Z]+)/g.test(value)) {
        errorMessage = "Mật khẩu phải có ít nhất 1 chữ in hoa.";
      } else if (!/([0-9]+)/g.test(value)) {
        errorMessage = "Mật khẩu phải có ít nhất 1 chữ số.";
      } else if (!/([!@#$%^&*]+)/g.test(value)) {
        errorMessage = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt.";
      } else if (value.length > 16) {
        errorMessage = "Mật khẩu không được vượt quá 16 ký tự.";
      } else {
        errorMessage = "";
      }
    }
    if (name === "confirmPassword") {
      if (value !== user.values.password) {
        errorMessage = "* Mật khẩu không khớp. Hãy thử lại.";
      }
    }

    let values = { ...user.values, [name]: value };
    let errors = { ...user.errors, [name]: errorMessage };
    setUser(
      {
        ...user,
        values: values,
        errors: errors,
      },
      () => {
        checkValid();
      }
    );
  };

  const checkValid = () => {
    let valid = true;
    for (let key in user.errors) {
      if (user.errors[key] !== "" || user.values[key] === "") {
        valid = false;
      }
    }

    setUser({
      ...user,
      valid: valid,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="signUp">
      <Container component="main" maxWidth="xs" className="signUpContent">
        <CssBaseline />
        <div className={classes.paper}>
          <Paper className={classes.avatar}></Paper>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Họ"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.firstName}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.firstName}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Tên"
                  name="lastName"
                  autoComplete="lname"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.lastName}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.lastName}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Tài khoản"
                  name="username"
                  autoComplete="username"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.username}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.username}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Số điện thoại"
                  type="text"
                  id="phone"
                  autoComplete="current-phone"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.phone}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.phone}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.email}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.email}
                </FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.password}
                />
                <FormHelperText className="text-danger errorMessage  ">
                  {user.errors.password}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  label="Xác nhận mật khẩu"
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={user.values.confirmPassword}
                />
                <FormHelperText className="text-danger errorMessage">
                  {user.errors.confirmPassword}
                </FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Nhận các thông báo và ưu đãi mới nhất"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Đã có tài khoản tại Tix? Đăng nhập ngay
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
