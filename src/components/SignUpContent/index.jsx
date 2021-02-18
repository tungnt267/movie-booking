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
import { Paper } from "@material-ui/core";
import Image from "../../assets/images/login/web-logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/user.actions";
import * as yup from "yup";
import "./signUpContent.scss";

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
  taiKhoan: yup.string().required("* Trường này không được bỏ trống."),
  matKhau: yup
    .string()
    .required("* Trường này không được bỏ trống.")
    .matches(/([A-Z]+)/, "Mật khẩu phải có ít nhất 1 chữ in hoa.")
    .matches(/([0-9]+)/, "Mật khẩu phải có ít nhất 1 chữ số.")
    .matches(/([!@#$%^&*]+)/, "Mật khẩu phải có ít nhất 1 ký tự đặc biệt.")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
    .max(12, "Mật khẩu tối đa là 12 ký tự."),
  // xacNhanMatKhau: yup.string().required("* Trường này không được bỏ trống."),
  // .oneOf([yup.ref('matKhau'), null], "Mật khẩu không khớp."),
  hoTen: yup.string().required("* Trường này không được bỏ trống."),
  email: yup
    .string()
    .required("* Trường này không được bỏ trống.")
    .email("Email không đúng định dạng!"),
  soDt: yup
    .string()
    .required("* Trường này không được bỏ trống.")
    .matches(/^[0-9]+$/, "Số điện thoại phải là chữ số.")
    .min(9, "Số điện thoại phải có ít nhất 9 số.")
    .max(11, "Số điện thoại nhiều nhất là 11 số."),
});
export default function SignUpContent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeConfirmPass = (e, values) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    // console.log(values)
    // if(name === xacNhanMatKhau) {}
  };
  const history = useHistory();

  return (
    <div className="signUp">
      <Container component="main" maxWidth="xs" className="signUpContent">
        <CssBaseline />
        <div className={classes.paper}>
          <NavLink to="/">
            <Paper className={classes.avatar}></Paper>
          </NavLink>
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
            onSubmit={(initialValues) => {
              dispatch(register(initialValues));
              history.push("/login");
            }}
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
                    <ErrorMessage name="hoTen">
                      {(msg) => (
                        <div className="text-danger errorMessage">{msg} </div>
                      )}
                    </ErrorMessage>
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
                    <ErrorMessage name="email">
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
                      name="matKhau"
                      label="Mật khẩu"
                      type="password"
                      id="matKhau"
                      autoComplete="current-password"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="matKhau">
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
                      name="xacNhanMatKhau"
                      type="password"
                      label="Xác nhận mật khẩu"
                      id="xacNhanMatKhau"
                      onChange={handleChangeConfirmPass}
                    />
                    <ErrorMessage name="xacNhanMatKhau">
                      {(msg) => (
                        <div className="text-danger errorMessage">{msg} </div>
                      )}
                    </ErrorMessage>
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
