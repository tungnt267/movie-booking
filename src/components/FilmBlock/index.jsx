import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { getMovieListRequest } from "../../redux/actions/movie.action";
import VideoModal from "../VideoModal";
import "./filmBlock.scss";

const FilmBlock = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    infinite: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  const { movieList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let currentTime = new Date();

  const convertDate = (dateTime) => {
    let date = new Date(dateTime);
    return date.getTime();
  };

  const renderNowShowing = () => {
    const unique = [];
    movieList?.map((x) =>
      unique.filter((a) => a.tenPhim === x.tenPhim).length > 0
        ? null
        : unique.push(x)
    );

    let nowShowingArr = unique?.filter(
      (movie) => convertDate(movie.ngayKhoiChieu) <= currentTime.getTime()
    );
    return nowShowingArr?.map((movie, index) => {
      return (
        <div key={index} className="film-block__item">
          <div className="card">
            <span className="film__rating">
              <p className="rating__text">{movie.danhGia}</p>
              <p className="rating__star">
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
              </p>
            </span>
            <div
              className="film__thumbnail"
              style={{
                backgroundImage: `url(${movie.hinhAnh})`,
              }}
            >
              <div className="film__overlay">
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target={`#carouselModal${movie.maPhim}`}
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title film__name">
                <span className="film__name__header">{movie.maNhom}</span>
                {movie.tenPhim}
              </h4>
              <p className="film__time">103 phút</p>
            </div>
            <NavLink
              to={`/detail/${movie.maPhim}`}
              target="_blank"
              className="btn-buy-now"
            >
              Mua vé
            </NavLink>
          </div>
        </div>
      );
    });
  };

  const renderComingSoon = () => {
    const unique = [];
    movieList?.map((x) =>
      unique.filter((a) => a.tenPhim === x.tenPhim).length > 0
        ? null
        : unique.push(x)
    );

    let comingSoonArr = unique?.filter(
      (movie) => convertDate(movie.ngayKhoiChieu) > currentTime.getTime()
    );

    return comingSoonArr?.map((movie, index) => {
      return (
        <div key={index} className="film-block__item">
          <div className="card">
            <span className="film__rating">
              <p className="rating__text">{movie.danhGia}</p>
              <p className="rating__star">
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.png" alt="star1" />
                <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
              </p>
            </span>
            <div
              className="film__thumbnail"
              style={{
                backgroundImage: `url(${movie.hinhAnh})`,
              }}
            >
              <div className="film__overlay">
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target={`#carouselModal${movie.maPhim}`}
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title film__name">
                <span className="film__name__header">{movie.maNhom}</span>
                {movie.tenPhim}
              </h4>
              <p className="film__time">103 phút</p>
            </div>
            <NavLink
              to={`/detail/${movie.maPhim}`}
              target="_blank"
              className="btn-buy-now"
            >
              Mua vé
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="film-block">
        <div className="film-block__tab">
          {/* Nav tabs */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#nowShowing"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle= "tab" href="#comingSoon">
                Sắp Chiếu
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active p-0" id="nowShowing">
              <Slider {...settings}>{renderNowShowing()}</Slider>
            </div>
            <div className="tab-pane container fade" id="comingSoon">
              <Slider {...settings}>{renderComingSoon()}</Slider>
            </div>
          </div>
        </div>
      </div>
      <VideoModal list={movieList} />
    </div>
  );
};

export default FilmBlock;
