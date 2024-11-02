import { useRef } from "react";

export const FullScreen = () => {
  const homeRef = useRef(null);

  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (homeRef.current.requestFullscreen) {
      homeRef.current.requestFullscreen();
    } else if (homeRef.current.mozRequestFullScreen) {
      // Firefox
      homeRef.current.mozRequestFullScreen();
    } else if (homeRef.current.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      homeRef.current.webkitRequestFullscreen();
    } else if (homeRef.current.msRequestFullscreen) {
      // IE/Edge
      homeRef.current.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  }
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleFullscreen}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Toggle Fullscreen
      </button>
    </div>
  );
};
