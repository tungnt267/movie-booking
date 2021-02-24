import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.scss";

const renderNewsContent1 = () => {
  return (
    <div className="tab-cinema">
      <div className="row row-top">
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news1.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Cigarettes After Sex chợt thoáng xuất hiện trong trailer phim
                  tâm lý Promising Young Woman
                </Link>
              </p>
              <p className="card-text">
                Toxic của Britney Spears cũng vang lên luôn đấy.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">1</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news2.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Điểm mặt những phim Việt công phá phòng chiếu trong năm 2020
                </Link>
              </p>
              <p className="card-text">
                Nửa cuối năm là thời gian thị trường phim Việt sẽ dậy sóng với
                sự trở lại của những tên tuổi gạo cội trong làng điện ảnh. Cùng
                điểm sơ qua những gưởng mặt sáng giá này nhé!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-bottom">
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news3.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  ‘Bà đồng’ Lin Shaye của Insidious tái xuất trong phim kinh dị
                  ‘Bẫy Linh Hồn’
                </Link>
              </p>
              <p className="card-text">
                Nữ hoàng phim kinh dị Lin Shaye tiếp tục thể hiện khả năng diễn
                xuất thần với hình ảnh điên loạn trong “DreamKatcher” – phim
                kinh dị rùng rợn đánh dấu sự trở lại của các rạp chiếu phim sau
                thời gian giãn cách xã hội.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news5.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                  Nolan
                </Link>
              </p>
              <p className="card-text">
                Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham
                gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn
                tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do
                khác khiến người yêu phim không thể bỏ lỡ Antebellum: Bẫy Thực
                Tại Kinh Hoàng.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news6.png" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  Với sự ra mắt của bom tấn TENET vào tháng 8 này, thầy phù thủy
                  làm nên thành công của The Dark Knight, Inception,
                  Interstellar hay Dunkirk - Christopher Nolan tiếp tục ghi dấu
                  ấn của mình trong danh sách đạo diễn của những tượng đài phòng
                  vé. Đây cũng là lúc để cùng nhìn lại 6 gương mặt làm phim “mát
                  tay” đem đến các tác phẩm bạc tỉ sáng giá tại Hollywood.
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news8.png" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news7.png" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  Diễn viên đặc biệt của Bằng Chứng Vô Hình
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news9.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const renderNewsContent2 = () => {
  return (
    <div className="tab-cinema">
      <div className="row row-top">
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news16.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Ford v Ferrari - Tuyệt tác về lịch sử của môn thể thao tốc độ
                </Link>
              </p>
              <p className="card-text">
                Trái với quan niệm phim tiểu sử thể thao thường khô khan, Ford v
                Ferrari đã mang đến một câu chuyện hấp dẫn về lịch sử của ngành
                công nghiệp ô tô và những đường đua kịch tính.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">41</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">13</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news17.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Trò Chơi Kỳ Ảo: Thăng Cấp - The Rock và đồng bọn tiếp tục 'phá
                  đảo thế giới ảo'
                </Link>
              </p>
              <p className="card-text">
                Với sự xuất hiện của “hội phụ lão”, Jumanji: The Next Level trở
                nên hài hước và lầy lội hơn hẳn phần đầu tiên
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">31</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">50</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-bottom">
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news18.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Chị Chị Em Em - Bản Remix cực 'gắt' của dối lừa - phản bội -
                  tình dục
                </Link>
              </p>
              <p className="card-text">
                Một câu chuyện lạ lẫm mà điện ảnh Việt Nam chưa từng có.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">41</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">60</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news19.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  [Review] Chị Chị Em Em - Tưởng phim tình cảm hóa ra 'hack não'
                  muốn tung cả đầu
                </Link>
              </p>
              <p className="card-text">
                Bộ phim đầu tay ở vai trò đạo diễn của Kathy Uyên mang đến hàng
                loạt nút thắt “ảo diệu” và cảm xúc dâng trào.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">51</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">40</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news20.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [Review] Đôi Mắt Âm Dương - Món lạ đầu năm vừa hài vừa sợ của
                  điện ảnh Việt
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news21.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [Review] 30 Chưa Phải Tết - Phim vòng lặp thời gian thương
                  hiệu Việt
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news22.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [Review] Gái Già Lắm Chiêu 3 - Cuộc chiến mẹ chồng - nàng dâu
                  của giới siêu giàu
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news23.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [Review] Bí Mật Của Gió - Câu chuyện “tình người duyên ma” đầy
                  nước mắt
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const renderNewsContent3 = () => {
  return (
    <div className="tab-cinema">
      <div className="row row-top">
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news24.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  CGV VÉ CHỈ 79.000Đ CẢ TUẦN!
                </Link>
              </p>
              <p className="card-text">
                Tận hưởng Ưu Đãi lên đến 3 VÉ CGV mỗi tuần chỉ với GIÁ
                79.000Đ/VÉ khi trên TĨ và thanh toán bằng ZaloPay.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">6</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">14</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/bhd-star-ve-chi-59-000d-ca-tuan.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                </Link>
              </p>
              <p className="card-text">
                Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-bottom">
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news25.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                </Link>
              </p>
              <p className="card-text">
                Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn
                quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại
                KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="card">
            <Link href="#" to="/">
              <img
                className="card-img-top"
                src="../images/news/news26.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" to="/" href="#">
                  CỰC NÓNG!!! GIẢM 50% KHI MUA 2 VÉ
                </Link>
              </p>
              <p className="card-text">
                ZaloPay mang đến ưu đãi khủng cho lần đầu thanh toán. Mở TIX đặt
                vé ngay thôi!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-like">
                <img src="../images/news/like.png" alt="like" />
                <span className="sp-like">1</span>
              </button>
              <button className="btn-comment">
                <img src="../images/news/comment.png" alt="comment" />
                <span className="sp-comment">0</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-0">
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news27.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                  Trai Yêu Quái
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news28.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư
                  Mù: Ai Chết
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news29.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [Mega GS] Một đoá hoa thay ngàn lời yêu
                </Link>
              </p>
            </div>
          </div>
          <div className="row-small">
            <div className="col-logo">
              <Link href="#" to="/">
                <img src="../images/news/news30.jpg" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" to="/" className="col-content__link">
                  [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  let [isShowDetail, setIsShowDetail] = useState(false);
  let [viewMore, setViewMore] = useState("none");

  const handleReadmore = () => {
    setIsShowDetail(!isShowDetail);
    if (!isShowDetail) {
      setViewMore("block");
    } else {
      setViewMore("none");
    }
  };
  return (
    <div className="news">
      <div className="news__tab film-block__tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="cinema24h-tab"
              data-toggle="tab"
              href="#cinema24h"
              role="tab"
              aria-controls="cinema24h"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="review-tab"
              data-toggle="tab"
              href="#review"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Review
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="promotion-tab"
              data-toggle="tab"
              href="#promotion"
              role="tab"
              aria-controls="promotion"
              aria-selected="false"
            >
              Khuyến Mãi
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active container"
            id="cinema24h"
            role="tabpanel"
            aria-labelledby="cinema24h-tab"
          >
            {renderNewsContent1()}
            <div style={{ display: `${viewMore}`, marginTop: "15px" }}>
              {renderNewsContent2()}
            </div>
          </div>
          <div
            className="tab-pane container fade"
            id="review"
            role="tabpanel"
            aria-labelledby="review-tab"
          >
            {renderNewsContent2()}
            <div style={{ display: `${viewMore}`, marginTop: "15px" }}>
              {renderNewsContent1()}
            </div>
          </div>
          <div
            className="tab-pane container fade"
            id="promotion"
            role="tabpanel"
            aria-labelledby="promotion-tab"
          >
            {renderNewsContent3()}
            <div style={{ display: `${viewMore}`, marginTop: "15px" }}>
              {renderNewsContent2()}
            </div>
          </div>
        </div>
      </div>

      <div className="view-more">
        <button className="btn btn-view-more" onClick={handleReadmore}>
          {isShowDetail ? "Rút gọn" : "Xem thêm"}
        </button>
      </div>
    </div>
  );
};

export default News;
