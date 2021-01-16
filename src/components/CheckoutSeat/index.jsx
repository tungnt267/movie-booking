import React from "react";
import "./checkoutSeat.scss";

const CheckoutSeat = () => {
  return (
    <div className="col-12 col-md-9 p-0 col-left">
      <div className="container">
        <div className="checkout__header">
          <div className="pick-seat d-none d-md-block">
            <span className="pick-seat__text active">
              <span className="pick-seat__step">01</span>
              CHỌN GHẾ &amp; THANH TOÁN
            </span>
            <span className="pick-seat__text">
              <span className="pick-seat__step">02</span>
              KẾT QUẢ ĐẶT VÉ
            </span>
          </div>
          <div className="header-md d-md-none">
            <span className="pick-seat__text">
              <span className="pick-seat__step">03.</span>
              THANH TOÁN
            </span>
          </div>
          <div className="header__user">
            <img
              className="user-img"
              src="../images/checkout/avatar-user.jpg"
              alt="avatar-user"
            />
            <span className="user__text d-none d-lg-inline">
              Thanh Tung Nguyen
            </span>
          </div>
        </div>
        <div className="checkout__content px-3">
          <div className="left-title">
            <div className="logo-cinema">
              <img className="logo" src="../images/checkout/bhd-logo.png" />
            </div>
            <div className="content-cinema">
              <p className="p-address">
                <span className="p-cinema">BHD Star</span>
                <span className="cinema-name"> - Vincom Thảo Điền</span>
              </p>
              <p className="p-hour">Thứ hai - 18:00 - RẠP 1</p>
            </div>
          </div>
          <div className="right-title">
            <p className="info1">thời gian giữ ghế</p>
            <p className="info2">
              <span className="minute">03</span>:
              <span className="second">50</span>
            </p>
          </div>
        </div>
        <div className="seat-map px-3">
          <div className="seat-map__screen text-center">
            <img
              className="img-fluid"
              src="../images/checkout/screen.png"
              alt="seat-map-screen"
            />
          </div>
          <div className="seat-list">
            <table className="tbl-seat-list">
              <tbody>
                <tr className="tr-seat">
                  <th className="th-seat">A</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">B</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">C</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">D</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">E</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">F</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">G</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">H</th>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair vip-seat" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                  <td>
                    <i className="fas fa-chair" />
                  </td>
                </tr>
                <tr className="tr-seat">
                  <th className="th-seat">I</th>
                  <td />
                  <td colSpan={2} className="text-center">
                    <i className="fas fa-couch" />
                  </td>
                  <td colSpan={2} className="text-center">
                    <i className="fas fa-couch" />
                  </td>
                  <td colSpan={2} className="text-center">
                    <i className="fas fa-couch" />
                  </td>
                  <td colSpan={2} className="text-center">
                    <i className="fas fa-couch" />
                  </td>
                  <td colSpan={2} className="text-center">
                    <i className="fas fa-couch" />
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="seat-type">
            <div className="type">
              <div>
                <i className="fas fa-chair" />
              </div>
              <div className="type-text">Ghế thường</div>
            </div>
            <div className="type">
              <div>
                <i className="fas fa-chair vip-seat" />
              </div>
              <div className="type-text">Ghế VIP</div>
            </div>
            <div className="type">
              <div>
                <i className="fas fa-couch" />
              </div>
              <div className="type-text">Ghế đôi</div>
            </div>
            <div className="type">
              <div>
                <i className="fas fa-chair selecting" />
              </div>
              <div className="type-text">Ghế đang chọn</div>
            </div>
            <div className="type">
              <div>
                <i className="fas fa-chair selected" />
              </div>
              <div className="type-text">Ghế đã có người chọn</div>
            </div>
            <div className="type">
              <div>
                <i className="fas fa-chair unable" />
              </div>
              <div className="type-text">Ghế không thể chọn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSeat;
