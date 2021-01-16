import React from "react";
// import Ads from "../../components/Ads";
import Carousel from "../../components/Carousel";
// import FilmBlock from "../../components/FilmBlock";
import Header from "../../components/Header";
import MovieTime from "../../components/MovieTime";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <FilmBlock /> */}
      <MovieTime />
      {/* <Ads /> */}
    </div>
  );
};

export default Home;
