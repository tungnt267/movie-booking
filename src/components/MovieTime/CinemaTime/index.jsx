import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaGroupRequest } from "../../../redux/actions/cinema.action";
import CinemaTimeItem from "./CinemaTimeItem";

const CinemaTime = (props) => {
  const { cinemaGroup } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaGroupRequest(props.cinemaId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderShowTime = () => {
    return cinemaGroup?.map((item, index) => {
      return (
        <div key={index} className="tab-pane fade show" id={item.maCumRap}>
          <CinemaTimeItem cinemaId={props.cinemaId} maCumRap={item.maCumRap} />
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
