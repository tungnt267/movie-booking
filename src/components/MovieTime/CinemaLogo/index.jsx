import React from "react";
// import { useDispatch } from "react-redux";
// import { getCinemaGroupRequest } from "../../../redux/actions/cinema.action";
// import { Link } from "react-router-dom";

const CinemaLogo = (props) => {
  // const dispatch = useDispatch();
  const renderCinemaList = () => {
    return props.cinemaList?.map((cinema, index) => {
      return (
        <li key={index} className="cinema-item">
          <a
            className="cinema-link"
            data-toggle="tab"
            href={`#${props.cinemaId}`}
            aria-selected="true"
            onClick={() => {
              props.setIdCinema(cinema.maHeThongRap);
              // dispatch(getCinemaGroupRequest(props.cinemaGrId));
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
