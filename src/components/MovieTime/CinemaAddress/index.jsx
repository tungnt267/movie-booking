import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaListRequest } from "../../../redux/actions/cinema.action";
import CinemaAddressItem from "./CinemaAddressItem";

const CinemaAddress = (props) => {
  const { cinemaList } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCinemaList = () => {
    return cinemaList
      ?.filter((item) => item.maHeThongRap === props.cinemaId)
      ?.map((cinema, index) => {
        return (
          <div key={index} className="tab-pane show" id={cinema.maHeThongRap}>
            <CinemaAddressItem
              cinemaId={props.cinemaId}
              setIdCinemaGroup={props.setIdCinemaGroup}
              cinemaLogo={cinema.logo}
            />
          </div>
        );
      });
  };
  return (
    <div className="cinema-address movie-time__item">
      <div className="tab-content" id="cinemaAddressTab">
        {renderCinemaList()}
      </div>
    </div>
  );
};

export default CinemaAddress;
