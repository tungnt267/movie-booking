import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCinemaGroupRequest,
//   getCinemaListRequest,
//   getShowTimeRequest,
// } from "../../redux/actions/cinema.action";
import CinemaAddress from "./CinemaAddress";
import CinemaLogo from "./CinemaLogo";
import CinemaTime from "./CinemaTime";
import "./movieTime.scss";

const MovieTime = () => {
  let [cinemaId, setIdCinema] = useState("BHDStar");

  // const { cinemaList, cinemaGroup, showTime } = useSelector(
  //   (state) => state.cinema
  // );
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCinemaListRequest());
    // dispatch(getCinemaGroupRequest(cinemaId));
    // dispatch(getShowTimeRequest(cinemaId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinemaId]);

  return (
    <div className="movie-time">
      <div className="movie-time__bg" />
      <div className="movie-time__content">
        <CinemaLogo
          // cinemaList={cinemaList}
          cinemaId={cinemaId}
          setIdCinema={setIdCinema}
        />
        <CinemaAddress
          // cinemaGroup={cinemaGroup}
          // cinemaList={cinemaList}
          // setIdCinema={setIdCinema}
          cinemaId={cinemaId}
        />
        <CinemaTime
          // cinemaGroup={cinemaGroup}
          // showTime={showTime}
          cinemaId={cinemaId}
        />
      </div>
    </div>
  );
};

export default MovieTime;
