import { GET_DETAIL_MOVIE_SUCCESS } from "../constants/detail.constant";

const initialState = {
  movieDetail: null,
};

const detailMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_MOVIE_SUCCESS:
      return { ...state, movieDetail: payload };

    default:
      return state;
  }
};
export default detailMovieReducer;
