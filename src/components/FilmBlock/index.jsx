import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "./filmBlock.scss";

const FilmBlock = () => {
  const ref = useRef({});

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    infinite: false,
    rows: 2,
    // responsive: [
    //   {
    //     breakpoint: 1198,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       rows: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       rows: 1,
    //     },
    //   },
    // ],
  };

  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

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
              <a className="nav-link" data-toggle="tab" href="#comingSoon">
                Sắp Chiếu
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active p-0" id="nowShowing">
              <Slider ref={ref} {...settings}>
                {renderSlides()}
              </Slider>
              {/* <Slider ref={ref} {...settings}>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img
                          src="../images/filmBlock/star1.2.png"
                          alt="star1.2"
                        />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-1">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img
                            src="../images/carousel/play-video.png"
                            alt="play-video"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img
                          src="../images/filmBlock/star1.2.png"
                          alt="star1.2"
                        />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-2">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img
                            src="../images/carousel/play-video.png"
                            alt="play-video"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img
                          src="../images/filmBlock/star1.2.png"
                          alt="star1.2"
                        />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img
                            src="../images/carousel/play-video.png"
                            alt="play-video"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img
                          src="../images/filmBlock/star1.2.png"
                          alt="star1.2"
                        />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-3">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img
                            src="../images/carousel/play-video.png"
                            alt="play-video"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                {/* <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-4">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-5">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-6">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-7">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-8">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-9">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-9">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-1">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-2">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.png" alt="star1" />
                        <img src="../images/filmBlock/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-3">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../images/carousel/play-video.png" alt="play-video" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title film__name">
                        <span className="film__name__header">C16</span>
                        Kẻ Cắp Nhân Dạng - Simon's Got a Gift - (C16)
                      </h4>
                      <p className="film__time">103 phút</p>
                    </div>
                    <a href="#" className="btn-buy-now">
                      Mua vé
                    </a>
                  </div>
                </div> */}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmBlock;
