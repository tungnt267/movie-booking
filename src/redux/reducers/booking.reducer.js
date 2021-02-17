import { GET_BOOKING_LIST_SUCCESS } from "../constants/booking.constant";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: null,
};

const bookingReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST_SUCCESS: {
      return {
        ...state,
        danhSachGhe: payload.danhSachGhe,
        thongTinPhim: payload.thongTinPhim,
      };
    }
    case "CHON_GHE": {
      const index = state.danhSachGhe.findIndex(
        (ghe) => ghe.maGhe === payload.maGhe
      );
      const gheCu = state.danhSachGhe[index];
      const gheMoi = { ...gheCu, dangChon: !gheCu.dangChon };
      state.danhSachGhe[index] = gheMoi;
      const danhSachGhe = [...state.danhSachGhe];

      return { ...state, danhSachGhe };
    }
    default:
      return state;
  }
};

export default bookingReducer;
