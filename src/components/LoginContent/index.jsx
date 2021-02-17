import React from "react";
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
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Image from "../../assets/images/login/web-logo.png";
import * as yup from "yup";

import { login } from "../../redux/actions/user.actions";
import "./loginContent.scss";
import { ErrorMessage, Form, Formik } from "formik";
import { Paper } from "@material-ui/core";

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

const singInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Trường này bắt buộc nhập."),
  matKhau: yup.string().required("Trường này bắt buộc nhập."),
});
function handleSubmit(e) {
  e.preventDefault();
}

const LoginContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="signIn">
      <Container component="main" maxWidth="xs" className="signInContent">
        <CssBaseline />
        <div className={classes.paper}>
          <Paper className={classes.avatar}></Paper>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Formik
            initialValues={{ taiKhoan: "", matKhau: "" }}
            onSubmit={(values) => {
              dispatch(login(values));
            }}
            render={({ handleChange }) => (
              <Form className={classes.form} noValidate>
                {/* onSubmit={handleSubmit} */}
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
                  // onBlur={handleChange}
                  // value={user.values.taiKhoan}
                />
                <Typography
                  className="text-danger "
                  style={{ fontSize: "13px" }}
                >
                  {/* {user.errors.taiKhoan} */}
                </Typography>

                <TextField
                  onChange={handleChange}
                  // onBlur={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  // value={user.values.matKhau}
                />
                <Typography
                  className="text-danger"
                  style={{ fontSize: "13px" }}
                >
                  {/* {user.errors.matKhau} */}
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
              </Form>
            )}
          />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default LoginContent;
