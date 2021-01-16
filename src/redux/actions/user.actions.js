import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";

export function loginRequest(user, history) {
  return (dispatch) => {
    dispatch(startLoading);
    // call api
    // Axios({
    //   method: "POST",
    //   url: 'duong dan api',
    //   data: {}
    // });

    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then(function (res) {
        // console.log(res);

        // lưu xuống localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        // chuyển về trang trước đó,
        // history.goBack();

        // chuyen ve home
        history.push("/home");
        dispatch(stopLoading);
      })
      .catch(function (err) {
        // console.log(err);
        // thông báo lỗi cho người dùng
        dispatch(stopLoading);
      });
  };
}
