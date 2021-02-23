import React from "react";
import MovieTime from "../MovieTime";
import format from "date-format";
import "./detailBottom.scss";

const DetailBottom = (props) => {
  return (
    <section className="detail-bottom" id="toShowTime">
      <div className="detail-bottom__info container">
        <div className="info__tab">
          {/* Nav tabs */}
          <ul className="nav nav-tabs" style={{ paddingBottom: "55px" }}>
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#showTime">
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#info">
                Thông Tin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#evaluate">
                Đánh Giá
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="showTime"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <MovieTime />
            </div>
            <div
              className="tab-pane fade "
              id="info"
              role="tabpanel"
              aria-labelledby="nav-info-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="info-detail">
                    <div className="row left-info">
                      <p className="content-title">Ngày công chiếu</p>
                      <p className="content-info ng-binding">
                        {format(
                          "dd.MM.yyyy",
                          new Date(props.movieDetail?.ngayKhoiChieu)
                        )}
                      </p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Đạo diễn</p>
                      <p className="content-info">Kay Nguyễn</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Diễn viên</p>
                      <p className="content-info">Jackie Chain</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Thể Loại</p>
                      <p className="content-info">hài hước, hành động</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Định dạng</p>
                      <p className="content-info">2D/Digital</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Quốc Gia SX</p>
                      <p className="content-info">Việt Nam</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-content-main">
                    <div className="row left-info">
                      <p className="content-title">Nội dung</p>
                    </div>
                    <div className="row left-info">
                      <p className="description">{props.movieDetail?.moTa}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="evaluate"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="col-12">
                <div className="info-evaluate">
                  <span className="img-reviewer">
                    <img
                      className="user-avatar"
                      src="../images/detail/avatar-user.jpg"
                      alt="avatar-user"
                    />
                  </span>
                  <input
                    className="input-reviewer"
                    type="text"
                    placeholder="Bạn nghĩ gì về phim này?"
                    readOnly="readonly"
                  />
                  <span className="img-reviewer-star">
                    <img src="../images/detail/star1.png" alt="star1" />
                    <img src="../images/detail/star1.png" alt="star1" />
                    <img src="../images/detail/star1.png" alt="star1" />
                    <img src="../images/detail/star1.png" alt="star1" />
                    <img src="../images/detail/star1.png" alt="star1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-bottom__news" />
    </section>
  );
};

export default DetailBottom;
