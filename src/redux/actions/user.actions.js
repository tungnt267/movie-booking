import axios from "axios";
import { userService } from "../../services";
import { DOMAIN } from "../../util/constants/settingSystem";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      // ({
      //   method: "POST",
      //   url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
      //   // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      //   data: user,
      // }).signIn(user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
