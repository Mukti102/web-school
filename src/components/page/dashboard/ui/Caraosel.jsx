import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiArrowFromLeft } from "react-icons/bi";

function Caraosel({ data, slidesToShow = 1 }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(data);
  }, [data]);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          right: "30px",
          zIndex: "100",
          scale: "1.6",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          left: "30px",
          zIndex: "100",
          scale: "1.5",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="mt-5 px-5">
      {images?.map((item) => (
        <a
          href={`agenda/${item?.id}`}
          className="h-[400px]   outline-none rounded-0 overflow-hidden px-5  py-1"
        >
          <img
            src={item?.thumbnail}
            alt=""
            className="w-full shadow-xl  object-cover h-full"
          />
        </a>
      ))}
    </Slider>
  );
}

export default Caraosel;
