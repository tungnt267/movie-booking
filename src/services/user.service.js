import Axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

class UserService {
  // eslint-disable-next-line no-useless-constructor
  signUp = (data) => {
    return Axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data,
    });
  };

  signIn = (user) => {
    return Axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: user,
    });
  };
}
export default UserService;
