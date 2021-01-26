// import { CircularProgress } from "@material-ui/core";
import React from "react";
// import Ads from "../../components/Ads";
// import Carousel from "../../components/Carousel";
// import FilmBlock from "../../components/FilmBlock";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MovieTime from "../../components/MovieTime";
// import News from "../../components/News";

const Home = () => {
  // let { isLoading } = useSelector((state) => state.loading);
  // if (isLoading) {
  //   return <CircularProgress />;
  // } else {
  return (
    <div>
      <Header />
      {/* <Carousel /> */}
      {/* <FilmBlock /> */}
      <MovieTime />
      {/* <News /> */}
      {/* <Ads /> */}
      {/* <Footer /> */}
    </div>
  );
  // }
};

export default Home;
