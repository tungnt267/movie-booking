import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import format from "date-format";
import { getShowTimeInfoRequest } from "../../../../../redux/actions/cinema.action";

const FilmShowTime = (props) => {
  const { showTimeInfo } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowTimeInfoRequest(props.filmId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filmId]);

  const hmsToMS = (hms) => {
    let a = hms.split(":");
    let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds * 1000;
  };

  function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    let hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return minutes >= 10 ? hours + ":" + minutes : hours + ":0" + minutes;
  }

  const renderFilmShowTime = () => {
    let arr = showTimeInfo?.heThongRapChieu
      .filter((heThongRap) => heThongRap.maHeThongRap === props.cinemaId)
      .map((cumRap) => cumRap.cumRapChieu)
      .flat()
      .map((lichChieu) => lichChieu.lichChieuPhim)
      .flat();

    const unique = [];
    arr?.map((x) =>
      unique.filter(
        (a) =>
          a.ngayChieuGioChieu.split("T")[1] ===
          x.ngayChieuGioChieu.split("T")[1]
      ).length > 0
        ? null
        : unique.push(x)
    );

    return unique?.map((showTime, index) => {
      return (
        <div className="col-3 p-0" key={index}>
          <Link
            className="hour-link"
            target="_blank"
            to={`/booking/${showTime?.maLichChieu}`}
          >
            <span className="hour-link__header">
              {format("hh:mm", new Date(showTime.ngayChieuGioChieu))}
            </span>{" "}
            ~{" "}
            {msToHMS(
              hmsToMS(showTime.ngayChieuGioChieu.split("T")[1]) +
                showTime.thoiLuong * 60000
            )}
          </Link>
        </div>
      );
    });
  };

  return <>{renderFilmShowTime()}</>;
};

export default FilmShowTime;
