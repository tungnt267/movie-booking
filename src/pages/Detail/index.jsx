// import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailBottom from "../../components/DetailBottom";
import DetailTop from "../../components/DetailTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoModal from "../../components/VideoModal";
import { getMovieDetailRequest } from "../../redux/actions/movie.action";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { movieDetail } = useSelector((state) => state.movie);

  useEffect(function () {
    dispatch(getMovieDetailRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { isLoading } = useSelector((state) => state.loading);
  // if (isLoading) {
  //   return <CircularProgress />;
  // } else {
  return (
    <div>
      <Header />
      <DetailTop movieDetail={movieDetail} />
      <DetailBottom movieDetail={movieDetail} />
      <Footer />
    </div>
  );
  // }
};

export default Detail;
