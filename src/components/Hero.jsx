import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Loading from "./Loading";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";

function Hero() {
  const [images, setImages] = useState([]);
  const { data, isLoading } = useFetch("hero-images");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setImages(data);
  }, [data]);
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

  if (isLoading) {
    return <HeroLoading />;
  }
  return (
    <Slider {...settings} className="mt-14 ">
      {images?.map((item) => (
        <div className="sm:h-screen h-64 shadow-primary  outline-none rounded-0 overflow-hidden">
          <img
            src={item?.image}
            alt=""
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
            }`}
          />
        </div>
      ))}
    </Slider>
  );
}

export default Hero;

const HeroLoading = () => {
  return (
    <div
      role="status"
      class="flex  items-center justify-center h-64 sm:h-screen mt-20 w-screen bg-gray-300 rounded-lg animate-pulse dark:bg-gray-800"
    >
      <svg
        class="w-10 h-10 text-gray-200 dark:text-gray-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
};
