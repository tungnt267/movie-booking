import React from "react";
import CheckoutForm from "../../components/CheckoutForm";
import CheckoutSeat from "../../components/CheckoutSeat";

const Booking = () => {
  return (
    <section className="checkout">
      <div className="container">
        <div className="row row-checkout">
          <CheckoutSeat />
          <CheckoutForm />
        </div>
      </div>
    </section>
  );
};

export default Booking;
