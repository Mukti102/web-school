import React from "react";
import YouTube from "react-youtube";

export default function CardYoutube() {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="max-w-[30%] shadow-lg p-0  overflow-hidden rounded-lg relative">
      <iframe
        width="350"
        height="180"
        src={`https://www.youtube.com/embed/2g811Eo7K8U`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
