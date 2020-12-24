import React from "react";
import Carousel from "../../components/Carousel";
import FilmBlock from "../../components/FilmBlock";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <FilmBlock />
    </div>
  );
};

export default Home;
