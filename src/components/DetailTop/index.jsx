import React from "react";
import format from "date-format";
import "./detailTop.scss";

const DetailTop = (props) => {
  const unique = [];
  props.movieDetail?.lichChieu.map((x) =>
    unique.filter((a) => a.maPhim === x.maPhim).length > 0
      ? null
      : unique.push(x)
  );

  return (
    <div
      className="detail-top"
      style={{ backgroundImage: `url('${props.movieDetail?.hinhAnh}')` }}
    >
      <div className="detail-bg d-none d-md-block" />
      <div className="cinema-img-md d-md-none">
        <img
          className="w-100"
          src={props.movieDetail?.hinhAnh}
          alt={props.movieDetail?.biDanh}
        />
        <button className="btn-trailer">
          <img src="../images/detail/play-video.png" alt="play-video" />
        </button>
      </div>
      <div className="detail-top__content container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="detail-img">
              <div
                className="cinema-img"
                style={{
                  backgroundImage: `url('${props.movieDetail?.hinhAnh}')`,
                }}
              />
              <button
                className="btn-trailer"
                href="#"
                data-toggle="modal"
                data-target={`#carouselModal${props.movieDetail?.maPhim}`}
              >
                <img src="../images/detail/play-video.png" alt="play-video" />
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="detail-top__text">
              <div>
                <span className="detail-info1">
                  {format(
                    "dd.mm.yyyy",
                    new Date(props.movieDetail?.ngayKhoiChieu)
                  )}
                </span>
                <br />
              </div>
              <div className="parent-info2">
                <span className="detail-info2">
                  <span className="sp-info2">
                    {" "}
                    {props.movieDetail?.maNhom}{" "}
                  </span>
                  {props.movieDetail?.tenPhim}
                </span>
              </div>
              <div>
                <span className="detailMainInfo1">
                  {unique.map((item) => item.thoiLuong)} phút - 0 IMDb -
                  2D/Digital
                </span>
                <br />
                <br />
                <a className="btn btn-buy-ticket" href="#toShowTime">
                  Mua vé
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block">
            <div className="detail-top__rating">
              <span className="rating-circle">
                {props.movieDetail?.danhGia > 9
                  ? props.movieDetail?.danhGia
                  : props.movieDetail?.danhGia.toFixed(1)}
              </span>
              <div className="rating-star">
                <img src="../images/detail/star1.png" alt="rating-star" />
                <img src="../images/detail/star1.png" alt="rating-star" />
                <img src="../images/detail/star1.png" alt="rating-star" />
                <img src="../images/detail/star1.2.png" alt="rating-star" />
              </div>
              <span className="rating-text">271 người đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTop;
