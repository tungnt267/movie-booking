import React from "react";
import Slider from "react-slick";
import "./filmBlock.scss";

const FilmBlock = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    // loop: true,
    margin: 15,
    // nav: true,
    // dots: false,
    // responsive: {
    //   0: {
    //     items: 1,
    //     slideBy: 1,
    //   },
    //   576: {
    //     items: 2,
    //     slideBy: 2,
    //   },
    //   768: {
    //     items: 3,
    //     slideBy: 3,
    //   },
    //   992: {
    //     items: 4,
    //     slideBy: 4,
    //   },
    // },
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
              <a className="nav-link" data-toggle="tab" href="#comingSoon">
                Sắp Chiếu
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active p-0" id="nowShowing">
              {/* <div
                className="film-block__list owl-carousel owl-theme"
                id="filmBlockNow"
              > */}
              <Slider {...settings}>
                <div className="film-block__item">
                  <div className="card">
                    <span className="film__rating">
                      <p className="rating__text">8.8</p>
                      <p className="rating__star">
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-1">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-2">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-3">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-4">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-5">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-6">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-7">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-8">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-9">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-9">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-1">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-2">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-10">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.png" alt="star1" />
                        <img src="../img/star1.2.png" alt="star1.2" />
                      </p>
                    </span>
                    <div className="film__thumbnail thumb-3">
                      <div className="film__overlay">
                        <button className="btn-trailer">
                          <img src="../img/play-video.png" alt="play-video" />
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
              </Slider>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmBlock;
