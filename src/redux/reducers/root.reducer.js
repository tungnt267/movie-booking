import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import loadingReducer from "./loading.reducer";
import cinemaReducer from "./cinema.reducer";
import UserReducer from "./user.reducer";
import bookingReducer from "./booking.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
  cinema: cinemaReducer,
  user: UserReducer,
  booking: bookingReducer,
});

export default rootReducer;
