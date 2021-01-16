import React from "react";
import Ads from "../../components/Ads";
import Carousel from "../../components/Carousel";
import FilmBlock from "../../components/FilmBlock";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <FilmBlock />
      <Ads />
      <Footer />
    </div>
  );
};

export default Home;
