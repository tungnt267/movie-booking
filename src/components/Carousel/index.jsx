import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BuyTicket from "../BuyTicket";
import VideoModal from "../VideoModal";
import "./carousel.scss";

const Carousel = () => {
  const carouselList = [
    {
      maPhim: 1,
      hinhAnh: "../images/carousel/diep-vien-sieu-lay.jpg",
      trailer: "https://www.youtube.com/embed/5IMIdd3iq6A",
    },
    {
      maPhim: 2,
      hinhAnh: "../images/carousel/ca-sau-tu-than.png",
      trailer: "https://www.youtube.com/embed/JKNv2YfrM7Y",
    },
    {
      maPhim: 3,
      hinhAnh: "../images/carousel/ke-cuong-sat.jpg",
      trailer: "https://www.youtube.com/embed/m8y4zigvplE",
    },
    {
      maPhim: 4,
      hinhAnh: "../images/carousel/mai-ben-em.png",
      trailer: "https://www.youtube.com/embed/dsOSmQl2yA8",
    },
    {
      maPhim: 5,
      hinhAnh: "../images/carousel/noi-chien-sieu-anh-hung.jpg",
      trailer: "https://www.youtube.com/embed/CtmcwhzzjXQ",
    },
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
            <img src={carousel.hinhAnh} alt={carousel.hinhAnh} />
            <button
              className="btn-trailer"
              href="#"
              data-toggle="modal"
              data-target={`#carouselModal${carousel.maPhim}`}
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
        <VideoModal list={carouselList} />
        <BuyTicket />
      </div>
    </div>
  );
};

export default Carousel;
