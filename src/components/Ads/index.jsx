import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./ads.scss";

const Ads = () => {
  const adsList = [
    {
      id: 1,
      img: "../images/advertisePhone/slide3.jpg",
    },
    {
      id: 2,
      img: "../images/advertisePhone/slide1.jpg",
    },
    {
      id: 3,
      img: "../images/advertisePhone/slide4.jpg",
    },
    {
      id: 4,
      img: "../images/advertisePhone/slide9.jpg",
    },
    {
      id: 5,
      img: "../images/advertisePhone/slide10.jpg",
    },
    {
      id: 6,
      img: "../images/advertisePhone/slide11.jpg",
    },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,

    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const renderAppCarousel = () => {
    return adsList.map((adsCarousel, index) => {
      return (
        <div key={index} className="app-slider-img">
          <img src={adsCarousel.img} alt={adsCarousel.img} />
        </div>
      );
    });
  };
  return (
    <div className="app">
      <div className="app__content container">
        <div className="row">
          <div className="col-md-6">
            <div className="app__content__text">
              <p className="text-top">Ứng dụng tiện lợi dành cho</p>
              <p className="text-top">người yêu điện ảnh</p>
              <br />
              <p className="text-small-mid">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <br />
              <button className="btn-app">App miễn phí - Tải về ngay!</button>
              <p className="text-app-under">
                TIX có hai phiên bản
                <Link className="app-link" to="/">
                  iOS
                </Link>
                <span>&amp;</span>
                <Link className="app-link" to="/">
                  Android
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app__content__image">
              <img
                className="img-mobile"
                src="../images/advertisePhone/mobile.png"
                alt="mobile"
              />
              <div className="content__carousel" id="appItem">
                <Slider {...settings}>{renderAppCarousel()}</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
