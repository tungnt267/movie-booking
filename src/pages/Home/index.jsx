import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ads from "../../components/Ads";
import Carousel from "../../components/Carousel";
import FilmBlock from "../../components/FilmBlock";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MovieTime from "../../components/MovieTime";
import News from "../../components/News";
import { getShowTimeRequest } from "../../redux/actions/cinema.action";

const Home = () => {
  const { showTime } = useSelector((state) => state.cinema);
  let [filmId, setFilmId] = useState(1315);
  let [cinemaId, setIdCinema] = useState("BHDStar");
  let [cinemaGroupId, setIdCinemaGroup] = useState("bhd-star-cineplex-bitexco");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowTimeRequest(cinemaId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let filterShowTime = showTime
    ?.map((item) => item.lstCumRap)
    ?.flat()
    .filter((item) => item.maCumRap === cinemaGroupId)
    .map((item) => item.danhSachPhim)
    .flat();

  return (
    <div>
      {/* <Header /> */}
      {/* <Carousel /> */}
      <FilmBlock />
      <MovieTime
        cinemaId={cinemaId}
        setIdCinema={setIdCinema}
        cinemaGroupId={cinemaGroupId}
        setIdCinemaGroup={setIdCinemaGroup}
        filterShowTime={filterShowTime}
        filmId={filmId}
        setFilmId={setFilmId}
      />
      <News />
      <Ads />
      <Footer />
    </div>
  );
  // }
};

export default Home;
