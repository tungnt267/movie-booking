import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
import { Link } from "react-router-dom";
import { getMovieDetailRequest } from "../../../../../../redux/actions/movie.action";

const FilmList = (props) => {
  let [filmId, setFilmId] = useState();

  const { movieDetail } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailRequest(filmId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmId]);

  //   const convertHourToMilliseconds = (hour) => {
  //     let a = hour.split(":");
  //     let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  //     return seconds * 1000;
  //   };
  const hmsToMS = (hms) => {
    let a = hms.split(":");
    let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds * 1000;
  };

  function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    let hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return minutes >= 10 ? hours + ":" + minutes : hours + ":0" + minutes;
  }

  const renderFilmShowTime = () => {
    const unique = [];
    movieDetail?.lichChieu.map((x) =>
      unique.filter(
        (a) =>
          a.ngayChieuGioChieu.split("T")[1] ===
          x.ngayChieuGioChieu.split("T")[1]
      ).length > 0
        ? null
        : unique.push(x)
    );

    return unique.map((showTime, index) => {
      return (
        <div className="col-3 p-0" key={index}>
          <Link to="/" className="hour-link">
            <span className="hour-link__header">
              {format("hh:mm", new Date(showTime.ngayChieuGioChieu))}
            </span>{" "}
            ~{" "}
            {msToHMS(
              hmsToMS(showTime.ngayChieuGioChieu.split("T")[1]) +
                showTime.thoiLuong * 60000
            )}
          </Link>
        </div>
      );
    });
  };

  const renderFilmList = () => {
    return props.filmList.map((film, index) => {
      return (
        <div key={index} className="time-list">
          <a
            className="time-link"
            data-toggle="collapse"
            href={`#id${film.maPhim}`}
            onClick={() => {
              setFilmId(film.maPhim);
            }}
          >
            <div className="time__content">
              <div className="time-logo">
                <img
                  className="nav-img time-logo"
                  src={film.hinhAnh}
                  alt={film.tenPhim}
                />
              </div>
              <div className="time-text">
                <span className="time-text__name">
                  <span className="name__header">{props.cinemaId}</span> -{" "}
                  {film.tenPhim}
                </span>
                {/* <span className="time-text__detail">item</span> */}
              </div>
            </div>
          </a>
          <div className="collapse multi-collapse" id={`id${film.maPhim}`}>
            <div className="time__content__version">
              <span>2D Digital</span>
            </div>
            <div className="time__content__hour">
              <div className="row m-0">{renderFilmShowTime()}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{renderFilmList()}</div>;
};

export default FilmList;
