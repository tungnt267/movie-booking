import React, { useState } from "react";
import CinemaAddress from "./CinemaAddress";
import CinemaLogo from "./CinemaLogo";
import CinemaTime from "./CinemaTime";
import "./movieTime.scss";

const MovieTime = () => {
  let [cinemaId, setIdCinema] = useState("BHDStar");
  let [cinemaGroupId, setIdCinemaGroup] = useState("bhd-star-cineplex-bitexco");
  return (
    <div className="movie-time">
      <div className="movie-time__bg" />
      <div className="movie-time__content">
        <CinemaLogo cinemaId={cinemaId} setIdCinema={setIdCinema} />
        <CinemaAddress
          cinemaGroupId={cinemaGroupId}
          setIdCinemaGroup={setIdCinemaGroup}
          cinemaId={cinemaId}
        />
        <CinemaTime cinemaId={cinemaId} cinemaGroupId={cinemaGroupId} />
      </div>
    </div>
  );
};

export default MovieTime;
