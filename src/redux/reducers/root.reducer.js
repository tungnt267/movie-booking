import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import loadingReducer from "./loading.reducer";
import cinemaReducer from "./cinema.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
  cinema: cinemaReducer,
  user: userReducer,
});

export default rootReducer;
