import React from "react";
import { Carousel } from "antd";
import "../assets/styles/homepage/homepage.scss";

export default () => {
  return (
    <Carousel autoplay className="movie-slider">
      <div className="movie-slider__poster">
        <img src="/images/star1.jpg" alt="" />
      </div>
      <div className="movie-slider__poster">
        <img src="/images/img2.jpg" alt="" />
      </div>
    </Carousel>
  );
};
