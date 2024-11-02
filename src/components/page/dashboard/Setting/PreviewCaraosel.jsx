import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PreviewCaraosel({ listImages, title }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <h1 className="mb-3 text-2xl text-gray-600 font-bold">{title}</h1>
      <Slider {...settings} className="">
        {listImages?.map((item) => (
          <div className="h-[500px]  shadow-primary  outline-none rounded-0 overflow-hidden">
            <img
              src={item?.image}
              alt=""
              className="w-full  object-cover h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PreviewCaraosel;
