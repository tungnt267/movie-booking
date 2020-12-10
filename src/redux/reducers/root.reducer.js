import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import loadingReducer from "./loading.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
});

export default rootReducer;
