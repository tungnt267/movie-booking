import React from "react";
import "./checkoutForm.scss";

const CheckoutForm = (props) => {
  const renderDanhSachGhe = () => {
    let seatRow = "";
    let seatNum = "";

    return props.danhSachChon?.map((ghe, index) => {
      if (ghe.stt <= props.rowLength + 1) {
        seatRow = "A";
        seatNum = +ghe.stt;
      } else if (+ghe.stt <= 2 * (props.rowLength + 1)) {
        seatRow = "B";
        seatNum = +ghe.stt - (props.rowLength + 1);
      } else if (+ghe.stt <= 3 * (props.rowLength + 1)) {
        seatRow = "C";
        seatNum = +ghe.stt - 2 * (props.rowLength + 1);
      } else if (+ghe.stt <= 4 * (props.rowLength + 1)) {
        seatRow = "D";
        seatNum = +ghe.stt - 3 * (props.rowLength + 1);
      } else if (+ghe.stt <= 5 * (props.rowLength + 1)) {
        seatRow = "E";
        seatNum = +ghe.stt - 4 * (props.rowLength + 1);
      } else if (+ghe.stt <= 6 * (props.rowLength + 1)) {
        seatRow = "F";
        seatNum = +ghe.stt - 5 * (props.rowLength + 1);
      } else if (+ghe.stt <= 7 * (props.rowLength + 1)) {
        seatRow = "G";
        seatNum = +ghe.stt - 6 * (props.rowLength + 1);
      } else if (+ghe.stt <= 8 * (props.rowLength + 1)) {
        seatRow = "H";
        seatNum = +ghe.stt - 7 * (props.rowLength + 1);
      } else if (+ghe.stt <= 9 * (props.rowLength + 1)) {
        seatRow = "I";
        seatNum = +ghe.stt - 8 * (props.rowLength + 1);
      } else {
        seatRow = "J";
        seatNum = +ghe.stt - 9 * (props.rowLength + 1);
      }
      console.log(props.danhSachChon.length);
      console.log(index);
      return (
        <span key={index} className="sp-seat">
          {seatRow + seatNum}
          {index === props.danhSachChon.length - 1 ? (
            <></>
          ) : (
            <span className="seatComma">, </span>
          )}
        </span>
      );
    });
  };

  return (
    <div className="col-12 col-md-3 col-right p-0">
      <div className="container p-0">
        <div className="checkout__form">
          <form>
            <div className="cash-text checkout__form__item d-none d-md-block">
              <p>{props.totalAmount} đ</p>
            </div>
            <div className="cinema-info checkout__form__item">
              <span className="name-title">
                {props.thongTinPhim?.tenCumRap.split(" ")[0]}
              </span>
              {props.thongTinPhim?.tenPhim}
              <div className="content-cinema">
                <div className="address">
                  <span className="p-cinema">
                    {props.thongTinPhim?.tenCumRap.split("-")[0]}
                  </span>
                  <span className="cinema-name">
                    {" "}
                    - {props.thongTinPhim?.tenCumRap.split("-")[1]}
                  </span>
                </div>
                <div className="cinema-hour">
                  Ngày {props.thongTinPhim?.ngayChieu} -{" "}
                  {props.thongTinPhim?.gioChieu} - {props.thongTinPhim?.tenRap}
                </div>
              </div>
            </div>
            <div className="chair checkout__form__item">
              <div className="chair__info">
                <span className="sp-info">
                  {props.danhSachChon.length > 0 ? (
                    <span className="sp-seatList">
                      Ghế {renderDanhSachGhe()}
                    </span>
                  ) : (
                    <span>Vui lòng chọn ghế</span>
                  )}
                </span>
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
              <img
                className="icon"
                src="../images/checkout/exclamation.png"
                alt="exclamation"
              />
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
