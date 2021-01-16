import React from "react";
import "./checkoutForm.scss";

const CheckoutForm = () => {
  return (
    <div className="col-12 col-md-3 col-right p-0">
      <div className="container p-0">
        <div className="checkout__form">
          <form>
            <div className="cash-text checkout__form__item d-none d-md-block">
              <p>70.000 đ</p>
            </div>
            <div className="cinema-info checkout__form__item">
              <span className="name-title">P</span>
              Mẹ Tôi Gánh Đội
              <div className="content-cinema">
                <div className="address">
                  <span className="p-cinema">BHD Star</span>
                  <span className="cinema-name"> - Phạm Hùng</span>
                </div>
                <div className="cinema-hour">
                  Ngày mai 13/10/2020 - 15:00 - RẠP 3
                </div>
              </div>
            </div>
            <div className="chair checkout__form__item">
              <div className="chair__info">
                <span>Ghế E13</span>
              </div>
              <div className="chair__cash">
                <span>70.000 đ</span>
              </div>
            </div>
            <div className="email checkout__form__item">
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className="phone checkout__form__item">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" />
            </div>
            <div className="voucher checkout__form__item">
              <div className="voucher-left">
                <label htmlFor="voucher">Mã giảm giá</label>
                <input
                  type="text"
                  name="voucher"
                  placeholder="Nhập tại đây..."
                />
              </div>
              <button type="button" className="btn btn-secondary btn-apply">
                Áp dụng
              </button>
            </div>
            <div className="payment">
              <div>Hình thức thanh toán</div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <img
                    src="../images/checkout/zalopay-payment.png"
                    className="img-payment"
                    alt="zalopay-payment"
                  />
                  <span className="sp-payment">Thanh toán qua ZaloPay</span>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <img
                    src="../images/checkout/visa-mastercard.jpg"
                    className="img-payment"
                    alt="zalopay-payment"
                  />
                  <span className="sp-payment">Visa, Master, JCB</span>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <img
                    src="../images/checkout/atm.jpg"
                    className="img-payment"
                    alt="zalopay-payment"
                  />
                  <span className="sp-payment">Thẻ ATM nội địa</span>
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                  />
                  <img
                    src="../images/checkout/payoo.jpg"
                    className="img-payment"
                    alt="zalopay-payment"
                  />
                  <span className="sp-payment">
                    Thanh toán tại cửa hàng tiện ích
                  </span>
                </label>
              </div>
            </div>
            <div className="notice">
              <img className="icon" src="../images/checkout/exclamation.png" />
              <span>
                Vé đã mua không thể đổi hoặc hoàn tiền <br />
                Mã vé sẽ được gửi qua tin nhắn
                <span className="sp-notice"> ZMS</span> (tin nhắn Zalo) và
                <span className="sp-notice"> Email</span> đã nhập
              </span>
            </div>
            <button type="button" className="btn-secondary btn-book-ticket">
              Đặt vé
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
