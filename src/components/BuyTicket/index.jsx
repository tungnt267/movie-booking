import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import format from "date-format";
import {
  getMovieDetailRequest,
  getMovieListRequest,
} from "../../redux/actions/movie.action";
import "./buyTicket.scss";

const BuyTicket = () => {
  const history = useHistory();
  const { movieList, movieDetail } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  let [loadingCinema, setLoadingCinema] = useState(false);
  let [values, setValues] = useState({
    filmSelect: 1314,
    cinemaSelect: "",
    dateSelect: "",
    hourSelect: "",
  });

  useEffect(() => {
    dispatch(getMovieListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMovieDetailRequest(values.filmSelect));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const renderMovieList = () => {
    const unique = [];
    movieList?.map((x) =>
      unique.filter((a) => a.tenPhim === x.tenPhim).length > 0
        ? null
        : unique.push(x)
    );

    return unique
      ?.sort((a, b) =>
        nonAccentVietnamese(a.tenPhim) > nonAccentVietnamese(b.tenPhim)
          ? 1
          : nonAccentVietnamese(b.tenPhim) > nonAccentVietnamese(a.tenPhim)
          ? -1
          : 0
      )
      .map((movie, index) => {
        return (
          <option key={index} value={movie.maPhim}>
            {movie.tenPhim}
          </option>
        );
      });
  };

  const renderMovieCinema = () => {
    if (+values.filmSelect !== 1314) {
      const unique = [];
      movieDetail?.lichChieu.map((x) =>
        unique.filter((a) => a.maRap === x.maRap).length > 0
          ? null
          : unique.push(x)
      );
      if (unique.length === 0) {
        return (
          <option disabled value="emptyCinema">
            Hiện tại phim không chiếu
          </option>
        );
      } else {
        return unique.map((showTime, index) => {
          return (
            <option key={index} value={showTime.thongTinRap.maRap}>
              {showTime.thongTinRap.tenCumRap} - {showTime.thongTinRap.tenRap}
            </option>
          );
        });
      }
    } else {
      return (
        <option disabled value="cinema">
          Vui lòng chọn phim
        </option>
      );
    }
  };

  const renderMovieDate = () => {
    if (values.filmSelect && values.cinemaSelect) {
      const movieDateArr = movieDetail?.lichChieu.filter(
        (item) => item.maRap === +values.cinemaSelect
      );

      const unique = [];
      movieDateArr?.map((x) =>
        unique.filter(
          (a) =>
            a.ngayChieuGioChieu.split("T")[0] ===
            x.ngayChieuGioChieu.split("T")[0]
        ).length > 0
          ? null
          : unique.push(x)
      );
      return unique.map((showTime, index) => {
        return (
          <option key={index} value={showTime.ngayChieuGioChieu}>
            {format("dd/MM/yyyy", new Date(showTime.ngayChieuGioChieu))}
          </option>
        );
      });
    } else {
      return (
        <option disabled value="date">
          Vui lòng chọn phim và rạp
        </option>
      );
    }
  };

  const renderMovieHour = () => {
    if (values.filmSelect && values.cinemaSelect && values.dateSelect) {
      const movieHourArr = movieDetail?.lichChieu.filter(
        (item) =>
          item.maRap === +values.cinemaSelect &&
          item.ngayChieuGioChieu.split("T")[0] ===
            values.dateSelect.split("T")[0]
      );

      const unique = [];
      movieHourArr?.map((x) =>
        unique.filter(
          (a) =>
            a.ngayChieuGioChieu.split("T")[1] ===
            x.ngayChieuGioChieu.split("T")[1]
        ).length > 0
          ? null
          : unique.push(x)
      );
      return unique.map((showTime, index) => {
        return (
          <option key={index} value={showTime.ngayChieuGioChieu}>
            {format("hh:mm", new Date(showTime.ngayChieuGioChieu))}
          </option>
        );
      });
    } else {
      return (
        <option disabled value="hour">
          Vui lòng chọn phim, rạp và ngày chiếu
        </option>
      );
    }
  };

  const nonAccentVietnamese = (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  };

  return (
    <div className="buy-ticket d-none d-lg-block">
      <div className="buy-ticket__film buy-ticket__item">
        <select
          className="select-menu"
          name="filmSelect"
          onChange={(e) => {
            setLoadingCinema(true);
            setValues({ ...values, [e.target.name]: e.target.value });
            setTimeout(() => {
              setLoadingCinema(false);
            }, 3000);
          }}
        >
          <option value="film" hidden>
            Phim
          </option>
          {renderMovieList()}
        </select>
      </div>
      <div className="buy-ticket__cinema buy-ticket__item">
        {loadingCinema ? (
          <select className="select-menu" name="cinemaSelect" disabled>
            <option value="cinema" hidden>
              Đang tìm rạp...
            </option>
          </select>
        ) : (
          <select
            className="select-menu"
            name="cinemaSelect"
            onChange={handleChange}
          >
            <option value="cinema" hidden>
              Rạp
            </option>
            {renderMovieCinema()}
          </select>
        )}
      </div>
      <div className="buy-ticket__date buy-ticket__item">
        <select
          className="select-menu"
          name="dateSelect"
          onChange={handleChange}
        >
          <option value="movieDate" hidden>
            Ngày xem
          </option>
          {renderMovieDate()}
        </select>
      </div>
      <div className="buy-ticket__show buy-ticket__item">
        <select
          className="select-menu"
          name="hourSelect"
          onChange={handleChange}
        >
          <option value="movieHour" hidden>
            Giờ chiếu
          </option>
          {renderMovieHour()}
        </select>
      </div>
      <div className="buy-ticket__buy buy-ticket__item">
        <div className="btn-buy-tk select-menu">
          {values.filmSelect &&
          values.cinemaSelect &&
          values.dateSelect &&
          values.hourSelect ? (
            <button
              className="btn btn-buy-ticket"
              onClick={() => {
                const idLichChieu = movieDetail?.lichChieu
                  .filter(
                    (item) =>
                      item.maRap === +values.cinemaSelect &&
                      item.ngayChieuGioChieu.split("T")[0] ===
                        values.dateSelect.split("T")[0] &&
                      item.ngayChieuGioChieu.split("T")[1] ===
                        values.hourSelect.split("T")[1]
                  )
                  .map((item) => item.maLichChieu)[0];
                history.push(`/booking/${idLichChieu}`);
              }}
            >
              MUA VÉ NGAY
            </button>
          ) : (
            <button disabled className="btn btn-buy-ticket">
              MUA VÉ NGAY
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
