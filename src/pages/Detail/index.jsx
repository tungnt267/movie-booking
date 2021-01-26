import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailBottom from "../../components/DetailBottom";
import DetailTop from "../../components/DetailTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getDetailMovieRequest } from "../../redux/actions/detail.action";

const Detail = () => {
  const { movieDetail } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovieRequest());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movieDetail);
  return (
    <div>
      <Header />
      <DetailTop movieDetail={movieDetail} />
      <DetailBottom />
      <Footer />
    </div>
  );
};

export default Detail;
