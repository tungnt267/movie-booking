import React from "react";
import { useStyles } from "./style";
import "./checkoutSeat.scss";
import { Button } from "@material-ui/core";
import { postBookingRequest } from "../../redux/actions/booking.action";
import { useDispatch } from "react-redux";

const CheckoutSeat = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const trangThaiGhe = (daDat, dangChon, loaiG) => {
    if (daDat) {
      return classes.daDat;
    } else {
      if (dangChon) {
        return classes.dangChon;
      } else {
        if (loaiG === "Thuong") {
          return classes.gheThuong;
        } else if (loaiG === "Vip") {
          return classes.gheVip;
        }
      }
    }
  };

  const renderGhe = () => {
    return props.danhSachGhe?.map((ghe, index) => {
      return ghe.daDat ? (
        <Button
          disabled
          key={index}
          className={trangThaiGhe(ghe.daDat, ghe.dangChon, ghe.loaiGhe)}
          onClick={() => {
            dispatch({
              type: "CHON_GHE",
              payload: ghe,
            });
          }}
        >
          <i
            className={`fas fa-chair ${trangThaiGhe(
              ghe.daDat,
              ghe.dangChon,
              ghe.loaiGhe
            )}`}
          />
        </Button>
      ) : (
        <Button
          key={index}
          className={trangThaiGhe(ghe.daDat, ghe.dangChon, ghe.loaiGhe)}
          onClick={() => {
            dispatch({
              type: "CHON_GHE",
              payload: ghe,
            });
            if (props.danhSachChon.indexOf(ghe) === -1) {
              props.setTotalAmount(props.totalAmount + +ghe.giaVe);
            } else {
              props.setTotalAmount(props.totalAmount - +ghe.giaVe);
            }
          }}
        >
          <i
            className={`fas fa-chair ${trangThaiGhe(
              ghe.daDat,
              ghe.dangChon,
              ghe.loaiGhe
            )}`}
          />
        </Button>
      );
    });
  };

  // const handleBooking = () => {
  //   let danhSachVe = props.danhSachGhe?.filter((ghe) => ghe.dangChon);
  //   danhSachVe = danhSachVe.map((ghe) => ({
  //     maGhe: ghe.maGhe,
  //     giaVe: ghe.giaVe,
  //   }));
  //   dispatch(postBookingRequest(idBooking, danhSachVe));
  // };

  return (
    <div className="col-12 col-md-9 p-0 col-left">
      <div className="container container-config__small">
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
              <img
                className="logo"
                src={props.thongTinPhim?.hinhAnh}
                alt={props.thongTinPhim?.tenPhim}
              />
            </div>
            <div className="content-cinema">
              <p className="p-address">
                <span className="p-cinema">
                  {props.thongTinPhim?.tenCumRap.split("-")[0]}
                </span>
                <span className="cinema-name">
                  {" "}
                  - {props.thongTinPhim?.tenCumRap.split("-")[1]}
                </span>
              </p>
              <p className="p-hour">
                {props.thongTinPhim?.ngayChieu} - {props.thongTinPhim?.gioChieu}{" "}
                - {props.thongTinPhim?.tenRap}
              </p>
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
            <div className="seat-list__head">
              <span className="seat-title">A</span>
              <span className="seat-title">B</span>
              <span className="seat-title">C</span>
              <span className="seat-title">D</span>
              <span className="seat-title">E</span>
              <span className="seat-title">F</span>
              <span className="seat-title">G</span>
              <span className="seat-title">H</span>
              <span className="seat-title">I</span>
              <span className="seat-title">J</span>
            </div>
            <div
              className="tbl-seat-list"
              style={{
                gridTemplateColumns: `repeat(${props.rowLength + 1}, 1fr)`,
              }}
            >
              {renderGhe()}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSeat;
