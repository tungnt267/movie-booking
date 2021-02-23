import axios from "axios";
import { startLoading, stopLoading } from "./loading.action";
import {
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.constant";
import Swal from "sweetalert2";

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
        dispatch(getBookingListSuccess(res.data));
        // Stop Loading
        dispatch(stopLoading());
      })
      .catch((err) => {
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
      const user = JSON.parse(localStorage.getItem("credentials"));

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

      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          title: "Thông tin đặt vé sẽ được gửi qua email",
          text: "Hãy kiểm tra thông tin trước khi xác nhận!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Đồng ý!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Đặt vé thành công!", "", "success").then(function () {
              window.location = `/booking/${maLichChieu}`;
            });
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
};
