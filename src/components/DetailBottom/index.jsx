import React from "react";
import MovieTime from "../MovieTime";
import "./detailBottom.scss";

const DetailBottom = () => {
  return (
    <section className="detail-bottom">
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
                      <p className="content-info ng-binding">14.02.2020</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Đạo diễn</p>
                      <p className="content-info">Kay Nguyễn</p>
                    </div>
                    <div className="row left-info">
                      <p className="content-title">Diễn viên</p>
                      <p className="content-info">Hương Giang, Puka</p>
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
                      <p className="description">
                        Phim xoay quanh câu chuyện cuộc đời của Dương - một anh
                        chàng cascadeur nhưng lại mang trong mình khát khao trở
                        thành phụ nữ. Một ngày nọ, ước mơ ấy bỗng phải trở thành
                        hiện thực ngay lập tức khi Dương tình cờ chứng kiến một
                        vụ giết người và buộc phải thay đổi nhân dạng để lẩn
                        trốn. Sau cuộc phẫu thuật chuyển giới, cha của Dương đột
                        ngột lâm bệnh nặng, khiến cô phải bất đắc dĩ tham gia
                        vào một cuộc thi Hoa hậu để có đủ tiền lo viện phí cho
                        cha. Kể từ đó, rất nhiều tình huống bi hài và nguy hiểm
                        không ngừng xảy đến với cô. Cùng đoán xem Dương sẽ phải
                        trải qua những gian truân như thế nào?
                      </p>
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
