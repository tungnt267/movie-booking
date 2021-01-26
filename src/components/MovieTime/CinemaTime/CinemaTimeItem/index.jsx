import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimeRequest } from "../../../../redux/actions/cinema.action";
import ShowTimeSystem from "./ShowTimeSystem";

const CinemaTimeItem = (props) => {
  const { showTime } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowTimeRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cinemaId]);

  const renderShowTimeList = () => {
    // const unique = [];
    // showTime?.map((x) =>
    //   unique.filter((a) => a === x).length > 0 ? null : unique.push(x)
    // );
    return showTime
      ?.filter((show) => show.maHeThongRap === props.cinemaId)
      .map((item, index) => {
        return (
          <ShowTimeSystem
            key={index}
            maCumRap={props.maCumRap}
            lstCumRap={item.lstCumRap}
            cinemaId={props.cinemaId}
          />
        );
      });
  };

  return <div className="flex-column">{renderShowTimeList()}</div>;
};

export default CinemaTimeItem;
