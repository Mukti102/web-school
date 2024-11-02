import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function SlideStaff() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container  px-14 h-max py-5 mx-auto">
      <Slider {...settings}>
        <CardStaff />
        <CardStaff />
        <CardStaff />
        <CardStaff />
      </Slider>
    </div>
  );
}

export function CardStaff() {
  return (
    <div className="rounded shadow-md  max-w-xs pt-5 mt-10 relative  bg-harmony">
      <div className="absolute  -mt-14 w-full flex  justify-center">
        <div className="min-h-24 w-24">
          <img
            src="https://randomuser.me/api/portraits/women/49.jpg"
            className="rounded-full object-cover h-full w-full shadow-md"
          />
        </div>
      </div>
      <div className="px-6 mt-16 text-white">
        <h1 className="font-bold text-2xl text-center mb-1">Carole Steward</h1>
        <p className=" text-sm text-center">Chief Executive Officer</p>
        <div className="w-full flex justify-center pt-5 pb-5">
          <a href="#" className="mx-5 text-xl ">
            <span>
              <FaInstagram />
            </span>
          </a>
          <a href="#" className="mx-5 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="mx-5 text-xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
