import React from "react";

export default function HeroVideo() {
  return (
    <>
      <div className="w-full flex justify-center items-center relative mt-24 h-screen bg-background">
        <video
          className="w-full h-full object-cover"
          muted
          src="https://ugm.ac.id/wp-content/uploads/2023/07/ugm-fasilitas.mp4"
        ></video>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-5"></div>
      </div>
    </>
  );
}
