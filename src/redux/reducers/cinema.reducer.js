import {
  GET_CINEMA_GROUP_SUCCESS,
  GET_CINEMA_LIST_SUCCESS,
  GET_SHOW_TIME_SUCCESS,
} from "../constants/cinema.constant";

const initialState = {
  cinemaList: null,
  cinemaGroup: null,
  showTime: null,
};

const cinemaReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_CINEMA_LIST_SUCCESS: {
      return { ...state, cinemaList: payload };
    }
    case GET_CINEMA_GROUP_SUCCESS: {
      return { ...state, cinemaGroup: payload };
    }
    case GET_SHOW_TIME_SUCCESS: {
      return { ...state, showTime: payload };
    }
    default:
      return state;
  }
};
export default cinemaReducer;
