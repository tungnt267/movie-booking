// import CinemaService from "../../services/cinema.service";
import { startLoading, stopLoading } from "./loading.action";
import {
  GET_CINEMA_GROUP_FAILED,
  GET_CINEMA_GROUP_SUCCESS,
  GET_CINEMA_LIST_FAILED,
  GET_CINEMA_LIST_SUCCESS,
  GET_SHOW_TIME_FAILED,
  GET_SHOW_TIME_SUCCESS,
} from "../constants/cinema.constant";
import Axios from "axios";

// Cinema List
export const getCinemaListRequest = () => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // CinemaService.getCinemaListApi()
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((res) => {
        // console.log(res);
        dispatch(getCinemaListSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getCinemaListFailed(err));
        // Stop Loading
        dispatch(stopLoading());
      });
  };
};

const getCinemaListSuccess = (cinemaList) => {
  return {
    type: GET_CINEMA_LIST_SUCCESS,
    payload: cinemaList,
  };
};

const getCinemaListFailed = (error) => {
  return {
    type: GET_CINEMA_LIST_FAILED,
    payload: error,
  };
};

// Cinema Group
export const getCinemaGroupRequest = (id) => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // CinemaService.getCinemaGroupApi()
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
    })
      .then((res) => {
        // console.log(res);
        dispatch(getCinemaGroupSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getCinemaGroupFailed(err));
        // Stop Loading
        dispatch(stopLoading());
      });
  };
};

const getCinemaGroupSuccess = (cinemaGroup) => {
  return {
    type: GET_CINEMA_GROUP_SUCCESS,
    payload: cinemaGroup,
  };
};

const getCinemaGroupFailed = (error) => {
  return {
    type: GET_CINEMA_GROUP_FAILED,
    payload: error,
  };
};

// Showtime
export const getShowTimeRequest = () => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // CinemaService.getShowTimeApi()
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
    })
      .then((res) => {
        // console.log(res);
        dispatch(getShowTimeSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getShowTimeFailed(err));
        // Stop Loading
        dispatch(stopLoading());
      });
  };
};

const getShowTimeSuccess = (showTime) => {
  return {
    type: GET_SHOW_TIME_SUCCESS,
    payload: showTime,
  };
};

const getShowTimeFailed = (error) => {
  return {
    type: GET_SHOW_TIME_FAILED,
    payload: error,
  };
};
