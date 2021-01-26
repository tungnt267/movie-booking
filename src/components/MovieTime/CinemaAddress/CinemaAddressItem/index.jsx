import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCinemaGroupRequest } from "../../../../redux/actions/cinema.action";

const CinemaAddressItem = (props) => {
  const { cinemaGroup } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCinemaGroupRequest(props.cinemaId));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGrList = () => {
    return cinemaGroup?.map((item, index) => {
      return (
        <li key={index} className="cinema-item">
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
                  alt={props.cinemaId}
                />
              </div>
              <div className="address-text">
                <span className="address-text__name">
                  <span className="name__header">
                    {item.tenCumRap.split("-")[0]}
                  </span>
                  - {item.tenCumRap.split("-")[1]}
                </span>
                <span className="address-text__direction">{item.diaChi}</span>
                <span className="address-text__detail">[chi tiết]</span>
              </div>
            </div>
          </Link>
        </li>
      );
    });
  };

  return <ul className="nav flex-column">{renderGrList()}</ul>;
};

export default CinemaAddressItem;
