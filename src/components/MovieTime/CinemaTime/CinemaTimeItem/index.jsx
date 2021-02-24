import React from "react";
import FilmShowTime from "./FilmShowTime";

const CinemaTimeItem = (props) => {
  const renderShowTimeList = () => {
    return props.filterShowTime?.map((film, index) => {
      return (
        <div key={index} className="time-list">
          <a
            className="time-link"
            data-toggle="collapse"
            href={`#id${film.maPhim}`}
            onClick={() => {
              props.setFilmId(film.maPhim);
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
              </div>
            </div>
          </a>
          <div className="collapse multi-collapse" id={`id${film.maPhim}`}>
            <div className="time__content__version">
              <span>2D Digital</span>
            </div>
            <div className="time__content__hour">
              <div className="row m-0">
                <FilmShowTime
                  lstLichChieuTheoPhim={film.lstLichChieuTheoPhim}
                  filmId={props.filmId}
                  cinemaId={props.cinemaId}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex-column">
      {props.filterShowTime.length > 0 ? (
        renderShowTimeList()
      ) : (
        <div
          style={{
            color: "#0c5460",
            background: "#d1ecf1",
            borderColor: "#bee5eb",
            padding: ".75rem 1.25rem",
          }}
        >
          Hiện không có lịch chiếu trên hệ thống rạp này
        </div>
      )}
    </div>
  );
};

export default CinemaTimeItem;
