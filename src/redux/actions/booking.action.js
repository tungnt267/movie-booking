import axios from "axios";
import { startLoading, stopLoading } from "./loading.action";
import {
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
  POST_BOOKING_LIST_SUCCESS,
  POST_BOOKING_LIST_FAILED,
} from "../constants/booking.constant";

// Booking List
export const getBookingListRequest = (idBooking) => {
  return (dispatch) => {
    // Start Loading
    dispatch(startLoading());

    // Call API
    // CinemaService.getCinemaListApi()
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`,
    })
      .then((res) => {
        // console.log(res);
        dispatch(getBookingListSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
        // console.log(err);
        dispatch(getBookingListFailed(err));
        // Stop Loading
        dispatch(stopLoading());
      });
  };
};

const getBookingListSuccess = (bookingList) => {
  return {
    type: GET_BOOKING_LIST_SUCCESS,
    payload: bookingList,
  };
};

const getBookingListFailed = (error) => {
  return {
    type: GET_BOOKING_LIST_FAILED,
    payload: error,
  };
};

// Dat Ve
export const postBookingRequest = (maLichChieu, danhSachVe) => {
  return async function (dispatch) {
    try {
      // getLocal
      // const user = JSON.parse(localStorage.getItem("user"));
      const user = {
        taiKhoan: "string",
        hoTen: "string",
        email: "string1@gmail.com",
        soDT: "0987654321",
        maNhom: "gp01",
        maLoaiNguoiDung: "KhachHang",
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNjEzMzk5MjA5LCJleHAiOjE2MTM0MDI4MDl9.TVv3X5AlTSeIjnHjS2dmXKC10NmxtNzl8zNhWE10Wok",
      };
      // call api
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      // if (res.status === 200 || res.status === 201) {
      //   alert("Success!");
      // }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const postBookingRequest = (maLichChieu, danhSachVe) => {
//   return (dispatch) => {
//     // Start Loading
//     dispatch(startLoading());

//     // Call API
//     // CinemaService.getCinemaListApi()
//     axios({
//       method: "POST",
//       url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
//     })
//       .then((res) => {
//         // console.log(res);
//         dispatch(postBookingListSuccess(res.data));
//         // Stop Loading
//         dispatch(stopLoading());
//       })
//       .catch((err) => {
//         // console.log(err);
//         dispatch(postBookingListFailed(err));
//         // Stop Loading
//         dispatch(stopLoading());
//       });
//   };
// };

// const postBookingListSuccess = (bookingList) => {
//   return {
//     type: POST_BOOKING_LIST_SUCCESS,
//     payload: bookingList,
//   };
// };

// const postBookingListFailed = (error) => {
//   return {
//     type: POST_BOOKING_LIST_FAILED,
//     payload: error,
//   };
// };
