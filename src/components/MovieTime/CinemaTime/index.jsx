import React from "react";
import { useSelector } from "react-redux";
import CinemaTimeItem from "./CinemaTimeItem";

const CinemaTime = (props) => {
  const { cinemaGroup } = useSelector((state) => state.cinema);
  const renderShowTime = () => {
    const unique = [];
    cinemaGroup?.map((x) =>
      unique.filter((a) => a.maHeThongRap === x.maHeThongRap).length > 0
        ? null
        : unique.push(x)
    );
    return unique?.map((item, index) => {
      return (
        <div
          key={index}
          className="tab-pane show tab-pane__cinemaTime"
          id={props.cinemaGroupId}
        >
          <CinemaTimeItem
            maCumRap={item.maCumRap}
            cinemaId={props.cinemaId}
            cinemaGroupId={props.cinemaGroupId}
          />
        </div>
      );
    });
  };

  return (
    <div className="cinema-time movie-time__item">
      <div className="tab-content" id="cinemaTimeTab">
        {renderShowTime()}
      </div>
    </div>
  );
};

export default CinemaTime;
