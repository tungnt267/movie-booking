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
import "./signUpContent.scss";
import { FormHelperText, Paper } from "@material-ui/core";
import Image from "../../assets/images/login/web-logo.png";
import { NavLink } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { userService } from "../../services";
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
  selectItem: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Trường này không được bỏ trống"),
  matKhau: yup.string().required("* Trường này không được bỏ trống"),
  hoTen: yup.string().required("* Trường này không được bỏ trống"),
  email: yup
    .string()
    .required("* Trường này không được bỏ trống")
    .email("Email không đúng định dạng!"),
  soDt: yup
    .string()
    .required("* Trường này không được bỏ trống")
    .matches(/^[0-9]+$/),
});
export default function SignUpContent() {
  const classes = useStyles();

  //   if (value.trim() === "") {
  //     errorMessage = "* Trường này không được bỏ trống";
  //   }

  //   // check email pattern
  //   if (type === "email") {
  //     const emailRegex =
  //       "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
  //     if (!value.match(emailRegex)) {
  //       errorMessage = "Email không đúng định dạng!";
  //     }
  //   }

  //   if (name === "phone") {
  //     const phoneRegex = `^(0|[0-9][0-9]*).{9,11}$`;
  //     if (!value.match(phoneRegex)) {
  //       errorMessage = "* Số điện thoại không đúng định dạng!";
  //     }
  //   }

  //   if (name === "password") {
  //     if (value.length < 6) {
  //       errorMessage = "Mật khẩu phải có ít nhất 6 ký tự.";
  //     } else if (!/([A-Z]+)/g.test(value)) {
  //       errorMessage = "Mật khẩu phải có ít nhất 1 chữ in hoa.";
  //     } else if (!/([0-9]+)/g.test(value)) {
  //       errorMessage = "Mật khẩu phải có ít nhất 1 chữ số.";
  //     } else if (!/([!@#$%^&*]+)/g.test(value)) {
  //       errorMessage = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt.";
  //     } else if (value.length > 16) {
  //       errorMessage = "Mật khẩu không được vượt quá 16 ký tự.";
  //     } else {
  //       errorMessage = "";
  //     }
  //   }
  //   if (name === "confirmPassword") {
  //     if (value !== user.values.password) {
  //       errorMessage = "* Mật khẩu không khớp. Hãy thử lại.";
  //     }
  //   }

  //   let values = { ...user.values, [name]: value };
  //   let errors = { ...user.errors, [name]: errorMessage };
  //   setUser(
  //     {
  //       ...user,
  //       values: values,
  //       errors: errors,
  //     },
  //     () => {
  //       checkValid();
  //     }
  //   );
  // };

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  const handleSubmit = (values) => {
    userService.signUp(values);
  };
  return (
    <div className="signUp">
      <Container component="main" maxWidth="xs" className="signUpContent">
        <CssBaseline />
        <div className={classes.paper}>
          <Paper className={classes.avatar}></Paper>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP01",
              maLoaiNguoiDung: "Khách hàng",
              hoTen: "",
            }}
            validationSchema={signUpUserSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="taiKhoan"
                      label="Tài khoản"
                      name="taiKhoan"
                      autoComplete="taiKhoan"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => (
                        <div className="text-danger errorMessage">{msg} </div>
                      )}
                    </ErrorMessage>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="soDt"
                      label="Số điện thoại"
                      type="text"
                      id="soDt"
                      autoComplete="current-phone"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="soDt">
                      {(msg) => (
                        <div className="text-danger errorMessage">{msg} </div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="hoTen"
                      variant="outlined"
                      required
                      fullWidth
                      id="fullName"
                      label="Họ và tên"
                      autoFocus
                      onChange={formikProps.handleChange}
                    />
                    <FormHelperText className="text-danger errorMessage  "></FormHelperText>
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
                      onChange={formikProps.handleChange}
                    />
                    <FormHelperText className="text-danger errorMessage  "></FormHelperText>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="matKhau"
                      label="Mật khẩu"
                      type="password"
                      id="matKhau"
                      autoComplete="current-password"
                      onChange={formikProps.handleChange}
                    />
                    <FormHelperText className="text-danger errorMessage  "></FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="xacNhanMatKhau"
                      type="password"
                      label="Xác nhận mật khẩu"
                      id="xacNhanMatKhau"
                      onChange={formikProps.handleChange}
                    />
                    <FormHelperText className="text-danger errorMessage"></FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <label id="maNhom" className={classes.selectItem}>
                      Mã nhóm
                    </label>
                    <Field
                      component="select"
                      id="maNhom"
                      name="maNhom"
                      onChange={formikProps.handleChange}
                    >
                      <option>GP01</option>
                      <option>GP02</option>
                      <option>GP03</option>
                      <option>GP04</option>
                      <option>GP05</option>
                      <option>GP06</option>
                      <option>GP07</option>
                      <option>GP08</option>
                      <option>GP09</option>
                      <option>GP10</option>
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <label id="maLoaiNguoiDung" className={classes.selectItem}>
                      Đối tượng
                    </label>
                    <Field
                      component="select"
                      id="maLoaiNguoiDung"
                      name="maLoaiNguoiDung"
                      onChange={formikProps.handleChange}
                    >
                      <option>Khách hàng</option>
                    </Field>
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
              </Form>
            )}
          </Formik>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
