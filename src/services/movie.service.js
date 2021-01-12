import Axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

class MovieService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  getMovieListApi = () => {
    return Axios({
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
  };
}

export default MovieService;
