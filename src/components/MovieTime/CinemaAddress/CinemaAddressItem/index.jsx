import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaGroupRequest } from "../../../../redux/actions/cinema.action";

const CinemaAddressItem = (props) => {
  const { cinemaGroup } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaGroupRequest(props.cinemaId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cinemaId]);

  const renderGrList = () => {
    return cinemaGroup?.map((item, index) => {
      return (
        <li key={index} className="cinema-item">
          <a
            className="cinema-link"
            data-toggle="tab"
            href={`#${item.maCumRap}`}
            aria-selected="true"
            onClick={() => {
              props.setIdCinemaGroup(item.maCumRap);
            }}
          >
            <div className="address__content">
              <div className="address-logo">
                <img
                  className="nav-img"
                  src={props.cinemaLogo}
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
          </a>
        </li>
      );
    });
  };

  return <ul className="nav flex-column">{renderGrList()}</ul>;
};

export default CinemaAddressItem;
