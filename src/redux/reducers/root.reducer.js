import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import loadingReducer from "./loading.reducer";
import cinemaReducer from "./cinema.reducer";
import detailMovieReducer from "./detail.reducer";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
  cinema: cinemaReducer,
  detail: detailMovieReducer,
  user: UserReducer,
});

export default rootReducer;
