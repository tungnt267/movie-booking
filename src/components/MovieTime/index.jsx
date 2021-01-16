import React from "react";
import CinemaAddress from "./CinemaAddress";
import CinemaLogo from "./CinemaLogo";
import CinemaTime from "./CinemaTime";
import "./movieTime.scss";

const MovieTime = () => {
  return (
    <div className="movie-time">
      <div className="movie-time__bg" />
      <div className="movie-time__content">
        <CinemaLogo />
        <CinemaAddress />
        <CinemaTime />
      </div>
    </div>
  );
};

export default MovieTime;
