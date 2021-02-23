import { createAction } from ".";
import { userService } from "../../services";
import Swal from "sweetalert2";
import { FETCH_CREDENTIALS } from "../constants/user.constant";

export const register = (data) => {
  return (dispatch) => {
    userService
      .signUp(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        localStorage.setItem("credentials", JSON.stringify(res.data));
        window.history.go(-1);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Tài khoản hoặc mật khẩu không hợp lệ!",
          text: "Vui lòng nhập lại.",
        });
      });
  };
};
