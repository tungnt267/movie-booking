import axios from "axios";
import React, { useEffect, useState } from "react";
import "./detailTop.scss";

const DetailTop = (props) => {
  let [state, setState] = useState({
    movieList: null,
  });

  useEffect(() => {
    getMovieList();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieList = () => {
    axios
      .get(
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314"
      )
      .then((res) => {
        setState({
          ...state,
          movieList: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="detail-top">
      <div className="detail-bg d-none d-md-block" />
      <div className="cinema-img-md d-md-none">
        <img
          className="w-100"
          // src="../images/detail/sac-dep-doi-tra-false-beauty-c16.jpg"
          src={state.movieList.hinhAnh}
          alt="false-beauty-c16"
        />
        <button className="btn-trailer">
          <img src="../images/detail/play-video.png" alt="play-video" />
        </button>
      </div>
      <div className="detail-top__content container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <div className="detail-img">
              <div className="cinema-img" />
              <button className="btn-trailer">
                <img src="../images/detail/play-video.png" alt="play-video" />
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="detail-top__text">
              <div>
                <span className="detail-info1">14.02.2020</span>
                <br />
              </div>
              <div className="parent-info2">
                <span className="detail-info2">
                  <span className="sp-info2"> C16 </span>
                  Sắc Đẹp Dối Trá - The Drama Queen
                </span>
              </div>
              <div>
                <span className="detailMainInfo1">
                  91 phút - 0 IMDb - 2D/Digital
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block">
            <div className="detail-top__rating">
              <span className="rating-circle">7.3</span>
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
      {/* END DETAIL TOP */}
    </div>
  );
};

export default DetailTop;
