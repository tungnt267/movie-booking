import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCinemaListRequest,
  getShowTimeRequest,
} from "../../redux/actions/cinema.action";
import CinemaAddress from "./CinemaAddress";
import CinemaLogo from "./CinemaLogo";
import CinemaTime from "./CinemaTime";
import "./movieTime.scss";

const MovieTime = () => {
  let [cinemaId, setIdCinema] = useState("BHDStar");

  const { cinemaList, showTime } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaListRequest());
    dispatch(getShowTimeRequest());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="movie-time">
      <div className="movie-time__bg" />
      <div className="movie-time__content">
        <CinemaLogo
          cinemaList={cinemaList}
          cinemaId={cinemaId}
          setIdCinema={setIdCinema}
        />
        <CinemaAddress cinemaList={cinemaList} cinemaId={cinemaId} />
        <CinemaTime showTime={showTime} />
      </div>
    </div>
  );
};

export default MovieTime;
