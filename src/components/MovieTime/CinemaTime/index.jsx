import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getShowTimeRequest } from "../../../redux/actions/cinema.action";

const CinemaTime = () => {
  const { showTime } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowTimeRequest());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderShowTime = () => {
    return showTime?.map((showTime, index) => {
      return (
        <div key={index} className="time-list">
          <Link className="time-link" data-toggle="collapse" to="#bhdBitexco_1">
            <div className="time__content">
              <div className="time-logo">
                <img
                  className="nav-img time-logo"
                  src={showTime.lstCumRap.danhSachPhim}
                  alt={showTime.lstCumRap.danhSachPhim}
                />
              </div>
              <div className="time-text">
                <span className="time-text__name">
                  <span className="name__header">C16</span>
                  Tenet -
                </span>
                <span className="time-text__detail">
                  120 phút - TIX 7.3 - IMDb 0
                </span>
              </div>
            </div>
          </Link>
          <div className="collapse multi-collapse" id="bhdBitexco_1">
            <div className="time__content__version">
              <span>2D Digital</span>
            </div>
            <div className="time__content__hour">
              <div className="row m-0">
                <div className="col-3 p-0">
                  <Link to="/" className="hour-link">
                    <span className="hour-link__header">14:25 </span>~ 16:25
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="cinema-time movie-time__item">
      <div className="tab-content" id="cinemaTimeTab">
        <div className="tab-pane show active" id="bhdBitexco">
          <div className="flex-column">{renderShowTime()}</div>
        </div>
        <div className="tab-pane" id="bhdThaoDien" />
        <div className="tab-pane" id="bhdVincom32" />
      </div>
    </div>
  );
};

export default CinemaTime;
