import React from "react";
import Ads from "../../components/Ads";
import Carousel from "../../components/Carousel";
import FilmBlock from "../../components/FilmBlock";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Ads />
      <Header />
      <Carousel />
      <FilmBlock />
    </div>
  );
};

export default Home;
