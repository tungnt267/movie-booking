import Axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

class CinemaService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  getCinemaListApi = () => {
    return Axios({
      url: `${DOMAIN}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };
}

export default CinemaService;
