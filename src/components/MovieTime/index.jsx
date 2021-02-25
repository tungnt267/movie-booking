import React from "react";
import CinemaAddress from "./CinemaAddress";
import CinemaLogo from "./CinemaLogo";
import CinemaTime from "./CinemaTime";
import "./movieTime.scss";

const MovieTime = (props) => {
  return (
    <div className="movie-time" id="movieTime">
      <div className="movie-time__bg" />
      <div className="movie-time__content">
        <CinemaLogo cinemaId={props.cinemaId} setIdCinema={props.setIdCinema} />
        <CinemaAddress
          cinemaGroupId={props.cinemaGroupId}
          setIdCinemaGroup={props.setIdCinemaGroup}
          cinemaId={props.cinemaId}
        />
        <CinemaTime
          cinemaId={props.cinemaId}
          cinemaGroupId={props.cinemaGroupId}
          filterShowTime={props.filterShowTime}
          filmId={props.filmId}
          setFilmId={props.setFilmId}
        />
      </div>
    </div>
  );
};

export default MovieTime;
