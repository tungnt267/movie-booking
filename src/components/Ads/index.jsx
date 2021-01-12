import React from "react";
import { Link } from "react-router-dom";
import "./ads.scss";
import Slider from "react-slick";

const Ads = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
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
                src="../images/ads/mobile.png"
                alt="mobile"
              />
              <div className="content__carousel" id="appItem">
                <Slider {...settings}>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide3.jpg" alt="item" />
                  </div>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide1.jpg" alt="item" />
                  </div>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide4.jpg" alt="item" />
                  </div>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide9.jpg" alt="item" />
                  </div>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide10.jpg" alt="item" />
                  </div>
                  <div className="app-slider-img">
                    <img src="../images/ads/slide11.jpg" alt="item" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
