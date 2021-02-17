import { FETCH_CREDENTIALS } from "../constants/user.constant";

const initialState = {
  credentials: null,
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_CREDENTIALS: {
      state.credentials = payload;
      return {...state};

    }
    default:
      return state;
  }
};
export default userReducer;
