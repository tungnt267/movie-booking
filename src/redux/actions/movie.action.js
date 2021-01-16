import axios from "axios";
// import MovieService from "../../services/movie.service";
import {
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.constant";
import { startLoading, stopLoading } from "./loading.action";

export const getMovieListRequest = () => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // MovieService.getMovieListApi()
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    })
      .then((res) => {
        dispatch(getMovieListSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getMovieListFailed(err));
        // Stop Loading
        dispatch(stopLoading());
      });
  };
};

const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMovieListFailed = (error) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: error,
  };
};
