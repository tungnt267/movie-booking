import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  //key là tên class : value là css của mình
  colorRed: {
    // key là thuộc tính của css : value là giá trị của css
    color: "red",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginContent = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  //   console.log("user: ", user);
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user, // clone ra để đủ thuộc tính
      [name]: value,
    });
    // console.log("user: ", user);
  }

  function handleSubmit(event) {
    event.preventDefault(); // ngăn chặn sự kiện load trang
    console.log(user);
    // dispatch(loginRequest(user, history));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <div className={classes.paper}> */}
      <div>
        {/* <Avatar className={classes.avatar}> */}
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5" className={classes.colorRed}> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taiKhoan"
            label="Email Address"
            name="taiKhoan"
            autoComplete="taiKhoan"
            autoFocus
            // onChange={handleChange}
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            label="Password"
            type="password"
            id="matKhau"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginContent;
