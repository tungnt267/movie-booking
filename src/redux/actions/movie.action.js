import axios from "axios";
// import MovieService from "../../services/movie.service";
import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.constant";
import { startLoading, stopLoading } from "./loading.action";

// Movie List
export const getMovieListRequest = () => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // MovieService.getMovieListApi()
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
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

// Movie Detail
export const getMovieDetailRequest = (id) => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // MovieService.getMovieDetailApi()
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((res) => {
        dispatch(getMovieDetailSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(getMovieDetailFailed(err));
        // Stop Loading
        dispatch(stopLoading());
        console.log(err);
      });
  };
};

const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getMovieDetailFailed = (error) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: error,
  };
};
