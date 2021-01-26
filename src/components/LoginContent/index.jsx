import React, { useEffect, useState } from "react";
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
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Image from "../../assets/images/login/web-logo.png";

import "./loginContent.scss";
import { loginRequest } from "../../redux/actions/user.actions";
import { Paper } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

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
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    let errorMessage = "";

    // // ktra rong
    if (value.trim() === "") {
      errorMessage = "* Trường này không được bỏ trống";
    }
    let values = { ...user.values, [name]: value }; // cap nhat gia tri values cho state
    let errors = { ...user.errors, [name]: errorMessage }; // cap nhat loi cho state
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
  // useEffect(() => {
  //   // dispatch(handleChange());
  //   return () => {};
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(loginRequest(user, history));
  }

  return (
    <div className="signIn">
      <Container component="main" maxWidth="xs" className="signInContent">
        <CssBaseline />
        <div className={classes.paper}>
          <NavLink to="/" className={classes.avatar}></NavLink>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account"
              label="Tài khoản"
              name="taiKhoan"
              autoFocus
              onChange={handleChange}
              onBlur={handleChange}
              value={user.values.taiKhoan}
            />
            <Typography className="text-danger " style={{ fontSize: "13px" }}>
              {user.errors.taiKhoan}
            </Typography>

            <TextField
              onChange={handleChange}
              onBlur={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="matKhau"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.values.matKhau}
            />
            <Typography className="text-danger" style={{ fontSize: "13px" }}>
              {user.errors.matKhau}
            </Typography>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ đăng nhập"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">Quên mật khẩu?</Link>
              </Grid>
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  {"Chưa có tài khoản? Đăng ký ngay"}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default LoginContent;
