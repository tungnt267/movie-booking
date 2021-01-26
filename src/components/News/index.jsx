import React from "react";
import { Link } from "react-router-dom";
import "./news.scss";

const renderNewsContent = () => {
  return (
    <div className="tab-cinema">
      <div className="row row-top">
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#">
              <img
                className="card-img-top"
                src="../images/news/dong-gia-1k-ve-khi-mua-ve-qua-tix.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" href="#">
                  [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                  Antebellum: Bẫy Thực Tại Kinh Hoàng
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
                <span className="sp-comment">1</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 p-0">
          <div className="card">
            <Link href="#">
              <img
                className="card-img-top"
                src="../images/news/bhd-star-ve-chi-59-000d-ca-tuan.jpg"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" href="#">
                  Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu
                  doanh thu tại Hàn Quốc mùa dịch
                </Link>
              </p>
              <p className="card-text">
                Bất chấp sự bùng phát của đại dịch COVID-19, Ác Quỷ Đối Đầu vẫn
                tạo nên làn sóng ấn tượng tại các rạp chiếu phim khi thu về 3.5
                triệu lượt xem. Bộ phim chạm mốc hoà vốn chỉ sau 12 ngày công
                chiếu, trở thành tâm điểm thu hút sự chú ý của tất cả khán giả
                yêu thích phim điện ảnh, đặc biệt là thể loại hành động tội
                phạm. Tính đến 7 giờ sáng ngày 19.08.2020, Ác Quỷ Đối Đầu vượt
                mốc 3.8 triệu lượt xem, chính thức vượt qua bom tấn Peninsula
                chiếu từ giữa tháng 7 với 3.7 triệu vé bán ra (theo Kobis).
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
            <Link href="#">
              <img
                className="card-img-top"
                src="../images/news/dong-gia-1k-ve-khi-mua-ve-qua-tix.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" href="#">
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
          <div className="card">
            <Link href="#">
              <img
                className="card-img-top"
                src="../images/news/dong-gia-1k-ve-khi-mua-ve-qua-tix.png"
                alt="cinema24h"
              />
            </Link>
            <div className="card-body">
              <p className="card-title">
                <Link className="card-title__link" href="#">
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
              <Link href="#">
                <img src="../images/news/6-dao-dien.png" alt="logo" />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" className="col-content__link">
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
              <Link href="#">
                <img
                  src="../images/news/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" className="col-content__link">
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
              <Link href="#">
                <img
                  src="../images/news/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" className="col-content__link">
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
              <Link href="#">
                <img
                  src="../images/news/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-content">
              <p>
                <Link href="#" className="col-content__link">
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
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="news">
      <div className="news__tab film-block__tab">
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              className="nav-link active"
              data-toggle="tab"
              href="#cinema24h"
            >
              Điện Ảnh 24h
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="tab" href="#review">
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="tab" href="#promotion">
              Khuyến Mãi
            </Link>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active p-0" id="cinema24h">
            {renderNewsContent()}
          </div>
          <div className="tab-pane container fade" id="review">
            {renderNewsContent()}
          </div>
          <div className="tab-pane container fade" id="promotion">
            {renderNewsContent()}
          </div>
        </div>
      </div>
      <div className="view-more">
        <button className="btn btn-view-more">Xem thêm</button>
      </div>
    </section>
  );
};

export default News;
