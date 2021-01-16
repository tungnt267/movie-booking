import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCinemaGroupRequest } from "../../../redux/actions/cinema.action";

const CinemaAddress = () => {
  const { cinemaGroup, cinemaList } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  let idCinema = cinemaList?.maHeThongRap || "BHDStar";
  useEffect(() => {
    dispatch(getCinemaGroupRequest(idCinema));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCinemaGroup = () => {
    return cinemaGroup?.map((cinemaGr, index) => {
      return (
        <div key={index} className="tab-pane show active" id={idCinema}>
          <ul className="nav flex-column">
            <li className="cinema-item">
              <Link
                className="cinema-link"
                data-toggle="tab"
                to="/"
                aria-selected="true"
              >
                <div className="address__content">
                  <div className="address-logo">
                    <img
                      className="nav-img"
                      src="../images/movieTime/bhd-star-bitexco.jpg"
                      alt="bhd-star-bitexco"
                    />
                  </div>
                  <div className="address-text">
                    <span className="address-text__name">
                      <span className="name__header">
                        {cinemaGr.tenCumRap.split("-")[0]}
                      </span>
                      - {cinemaGr.tenCumRap.split("-")[1]}
                    </span>
                    <span className="address-text__direction">
                      {cinemaGr.diaChi}
                    </span>
                    <span className="address-text__detail">[chi tiết]</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      );
    });
  };
  return (
    <div className="cinema-address movie-time__item">
      <div className="tab-content" id="cinemaAddressTab">
        {/* <div className="tab-pane show active" id="bhd">
          <ul className="nav flex-column">{renderCinemaGroup()}</ul>
        </div> */}
        {renderCinemaGroup()}
      </div>
    </div>
  );
};

export default CinemaAddress;
