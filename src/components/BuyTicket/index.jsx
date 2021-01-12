import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./buyTicket.scss";

const BuyTicket = (props) => {
  let [state, setState] = useState({
    movieList: [],
  });

  useEffect(() => {
    getMovieList();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieList = () => {
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        setState({
          ...state,
          movieList: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  const renderMovieList = () => {
    return state.movieList?.map((movie, index) => {
      return (
        <li key={index}>
          <Link to="/" className="film-link">
            {movie.tenPhim}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="buy-ticket d-none d-lg-block">
      <div className="buy-ticket__film buy-ticket__item">
        <div className="dropdown-toggle select-menu" data-toggle="dropdown">
          <span className="dropdown-title">Phim</span>
        </div>
        <ul className="dropdown-menu select-scroll">{renderMovieList()}</ul>
      </div>
      <div className="buy-ticket__cinema buy-ticket__item">
        <div className="dropdown-toggle select-menu" data-toggle="dropdown">
          <span className="dropdown-title">Rạp</span>
        </div>
        <ul className="dropdown-menu">
          <li>
            <Link to="/" className="film-link">
              Vui lòng chọn phim
            </Link>
          </li>
        </ul>
      </div>
      <div className="buy-ticket__date buy-ticket__item">
        <div className="dropdown-toggle select-menu" data-toggle="dropdown">
          <span className="dropdown-title">Ngày xem</span>
        </div>
        <ul className="dropdown-menu">
          <li>
            <Link to="/" className="film-link">
              Vui lòng chọn phim và rạp
            </Link>
          </li>
        </ul>
      </div>
      <div className="buy-ticket__show buy-ticket__item">
        <div className="dropdown-toggle select-menu" data-toggle="dropdown">
          <span className="dropdown-title">Suất chiếu</span>
        </div>
        <ul className="dropdown-menu">
          <li>
            <Link to="/" className="film-link">
              Vui lòng chọn phim, rạp và ngày xem
            </Link>
          </li>
        </ul>
      </div>
      <div className="buy-ticket__buy buy-ticket__item">
        <div className="btn-buy-tk select-menu">
          <button className="btn btn-buy-ticket">MUA VÉ NGAY</button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
