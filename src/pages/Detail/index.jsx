import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailBottom from "../../components/DetailBottom";
import DetailTop from "../../components/DetailTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getMovieDetailRequest } from "../../redux/actions/movie.action";

const Detail = () => {
  const dispatch = useDispatch();
  let { movieDetail } = useSelector((state) => state.movie);
  const { id } = useParams();

  useEffect(function () {
    dispatch(getMovieDetailRequest(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <DetailTop movieDetail={movieDetail} />
      <DetailBottom movieDetailId={id} movieDetail={movieDetail} />
      <Footer />
    </div>
  );
  // }
};

export default Detail;
