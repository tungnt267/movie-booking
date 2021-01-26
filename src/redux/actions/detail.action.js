import axios from "axios";
import {
  GET_DETAIL_MOVIE_SUCCESS,
  GET_DETAIL_MOVIE_FAILED,
} from "../constants/detail.constant";

export const getDetailMovieRequest = () => {
  return (dispatch) => {
    //call API
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314`,
    })
      .then((res) => {
        dispatch(getDetailMovieSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDetailMovieFailed(err));
      });
  };
};
const getDetailMovieSuccess = (movieDetail) => {
  return {
    type: GET_DETAIL_MOVIE_SUCCESS,
    payload: movieDetail,
  };
};

const getDetailMovieFailed = (error) => {
  return {
    type: GET_DETAIL_MOVIE_FAILED,
    payload: error,
  };
};
