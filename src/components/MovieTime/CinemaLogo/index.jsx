import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaListRequest } from "../../../redux/actions/cinema.action";

const CinemaLogo = (props) => {
  const { cinemaList } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCinemaList = () => {
    return cinemaList?.map((cinema, index) => {
      return (
        <li key={index} className="cinema-item">
          <a
            className="cinema-link"
            data-toggle="tab"
            href={`#${props.cinemaId}`}
            aria-selected="true"
            onClick={() => {
              props.setIdCinema(cinema.maHeThongRap);
            }}
          >
            <img
              className="nav-img"
              src={cinema.logo}
              alt={cinema.maHeThongRap}
            />
          </a>
        </li>
      );
    });
  };

  return (
    <div className="cinema-logo movie-time__item">
      <ul className="nav flex-column">{renderCinemaList()}</ul>
    </div>
  );
};

export default CinemaLogo;
