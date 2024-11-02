import React, { Component } from "react";
import Slider from "react-slick";
import CardAlumni from "./CardTeacher";

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container my-5">
      <Slider {...settings}>
        <CardAlumni />
        <CardAlumni />
        <CardAlumni />
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
