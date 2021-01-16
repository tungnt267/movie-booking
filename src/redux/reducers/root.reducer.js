import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import loadingReducer from "./loading.reducer";
import cinemaReducer from "./cinema.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
  cinema: cinemaReducer,
});

export default rootReducer;
