import Axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

class UserService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  signIn = (user) => {
    return Axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: user,
    });
  };
}
export default UserService;
