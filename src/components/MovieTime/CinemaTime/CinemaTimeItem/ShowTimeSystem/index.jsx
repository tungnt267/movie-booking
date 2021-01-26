import React from "react";
import FilmList from "./FilmList";

const ShowTimeSystem = (props) => {
  return props.lstCumRap
    ?.filter((cumRap) => cumRap.maCumRap === props.maCumRap)
    .map((item, index) => {
      return (
        <FilmList
          key={index}
          filmList={item.danhSachPhim}
          cinemaId={props.cinemaId}
        />
      );
    });
};

export default ShowTimeSystem;
