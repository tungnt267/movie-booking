// import { CircularProgress } from "@material-ui/core";
import React from "react";
<<<<<<< HEAD
import Ads from "../../components/Ads";
=======
import { useSelector } from "react-redux";
// import Ads from "../../components/Ads";
>>>>>>> 02f00d35bdd8726f32023a26af27af978ef7f7dc
import Carousel from "../../components/Carousel";
import FilmBlock from "../../components/FilmBlock";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MovieTime from "../../components/MovieTime";
import News from "../../components/News";

const Home = () => {
  // let { isLoading } = useSelector((state) => state.loading);
  // if (isLoading) {
  //   return <CircularProgress />;
  // } else {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      {/* <Carousel /> */}
=======
<<<<<<< HEAD
      {/* <Carousel /> */}
      <FilmBlock />
      {/* <MovieTime /> */}
      {/* <News /> */}
      {/* <Ads /> */}
      <Footer />
=======
      <Carousel />
>>>>>>> f497b9b56ee18de05e2d50e9c64499f158468bc7
      {/* <FilmBlock /> */}
      <MovieTime />
      {/* <Ads /> */}
      {/* <Footer /> */}
>>>>>>> 02f00d35bdd8726f32023a26af27af978ef7f7dc
    </div>
  );
  // }
};

export default Home;
