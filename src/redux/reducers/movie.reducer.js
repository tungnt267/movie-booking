import {
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.constant";

const initialState = {
  movieList: null,
  movieDetail: null,
};

const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS:
      return { ...state, movieList: payload };
    case GET_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetail: payload };
    default:
      return state;
  }
};

export default movieReducer;
