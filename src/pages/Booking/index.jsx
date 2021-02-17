import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";
import CheckoutSeat from "../../components/CheckoutSeat";
import { getBookingListRequest } from "../../redux/actions/booking.action";

const Booking = () => {
  const { idBooking } = useParams();
  let [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const { danhSachGhe, thongTinPhim } = useSelector((state) => state.booking);

  useEffect(function () {
    dispatch(getBookingListRequest(idBooking));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let danhSachChon = danhSachGhe?.filter((ghe) => ghe.dangChon);

  const rowLength = danhSachGhe.length / 10;
  return (
    <section className="checkout">
      <div className="container container-config__x-small">
        <div className="row row-checkout">
          <CheckoutSeat
            danhSachGhe={danhSachGhe}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            rowLength={rowLength}
            danhSachChon={danhSachChon}
            thongTinPhim={thongTinPhim}
          />
          <CheckoutForm
            danhSachGhe={danhSachGhe}
            rowLength={rowLength}
            danhSachChon={danhSachChon}
            thongTinPhim={thongTinPhim}
            totalAmount={totalAmount}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
