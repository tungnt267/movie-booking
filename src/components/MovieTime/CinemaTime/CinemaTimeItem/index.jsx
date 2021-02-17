import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimeRequest } from "../../../../redux/actions/cinema.action";
import FilmShowTime from "./FilmShowTime";

const CinemaTimeItem = (props) => {
  const { showTime } = useSelector((state) => state.cinema);

  let [filmId, setFilmId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowTimeRequest(props.cinemaId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderShowTimeList = () => {
    let filterArr = showTime
      ?.map((item) => item.lstCumRap)
      ?.flat()
      .filter((item) => item.maCumRap === props.cinemaGroupId)
      .map((item) => item.danhSachPhim)
      .flat();
    return filterArr?.map((film, index) => {
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
                  lstLichChieuTheoFilm={film.lstLichChieuTheoFilm}
                  filmId={filmId}
                  cinemaId={props.cinemaId}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="flex-column">{renderShowTimeList()}</div>;
};

export default CinemaTimeItem;
