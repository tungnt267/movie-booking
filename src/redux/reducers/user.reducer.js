import { FETCH_CREDENTIALS } from "../constants/user.constant";

const initialState = {
  credentials: null,
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_CREDENTIALS: {
      return { ...state, credentials: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
