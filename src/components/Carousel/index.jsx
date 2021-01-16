import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BuyTicket from "../BuyTicket";
import VideoModal from "../VideoModal";
import "./carousel.scss";

const Carousel = () => {
  const carouselList = [
    { id: 1, img: "../images/carousel/diep-vien-sieu-lay.jpg" },
    { id: 2, img: "../images/carousel/ca-sau-tu-than.png" },
    { id: 3, img: "../images/carousel/ke-cuong-sat.jpg" },
    { id: 4, img: "../images/carousel/mai-ben-em.png" },
    { id: 5, img: "../images/carousel/noi-chien-sieu-anh-hung.jpg" },
  ];
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const renderCarousel = () => {
    return carouselList.map((carousel, index) => {
      return (
        <div key={index} className="carousel-item">
          <Link to="/">
            <img src={carousel.img} alt={carousel.img} />
            <button
              className="btn-trailer"
              href="#"
              data-toggle="modal"
              data-target={`#carouselModal${carousel.id}`}
            >
              <img src="../images/carousel/play-video.png" alt="play-video" />
            </button>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="carousel-section d-none d-sm-block">
      <div className="container-fluid">
        <div className="carousel-inner">
          <Slider {...settings}>{renderCarousel()}</Slider>
        </div>
        <VideoModal />
        <BuyTicket />
      </div>
    </div>
  );
};

export default Carousel;
