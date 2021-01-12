import React from "react";
import { Link } from "react-router-dom";
import BuyTicket from "../BuyTicket";
import "./carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel-section d-none d-sm-block">
      <div className="container-fluid">
        <div id="tixCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#tixCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#tixCarousel" data-slide-to={1} />
            <li data-target="#tixCarousel" data-slide-to={2} />
            <li data-target="#tixCarousel" data-slide-to={3} />
            <li data-target="#tixCarousel" data-slide-to={4} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/">
                <img
                  src="../images/carousel/diep-vien-sieu-lay.jpg"
                  alt="diep-vien-sieu-lay"
                />
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target="#carouselModal1"
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/">
                <img
                  src="../images/carousel/ca-sau-tu-than.png"
                  alt="ca-sau-tu-than"
                />
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target="#carouselModal2"
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/">
                <img src="../images/carousel/mai-ben-em.png" alt="mai-ben-em" />
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target="#carouselModal3"
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/">
                <img
                  src="../images/carousel/ke-cuong-sat.jpg"
                  alt="ke-cuong-sat"
                />
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target="#carouselModal4"
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/">
                <img
                  src="../images/carousel/noi-chien-sieu-anh-hung.jpg"
                  alt="noi-chien-sieu-anh-hung"
                />
                <button
                  className="btn-trailer"
                  href="#"
                  data-toggle="modal"
                  data-target="#carouselModal5"
                >
                  <img
                    src="../images/carousel/play-video.png"
                    alt="play-video"
                  />
                </button>
              </Link>
            </div>
            <a
              className="carousel-control-prev"
              href="#tixCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#tixCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <BuyTicket />
      </div>
    </div>
  );
};

export default Carousel;
