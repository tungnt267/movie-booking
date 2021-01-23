import React from "react";
import CinemaAddressItem from "./CinemaAddressItem";

const CinemaAddress = (props) => {
  const renderCinemaList = () => {
    return props.cinemaList?.map((cinema, index) => {
      return (
        <div key={index} className="tab-pane show" id={cinema.maHeThongRap}>
          <CinemaAddressItem cinemaGrId={props.cinemaId} />
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
