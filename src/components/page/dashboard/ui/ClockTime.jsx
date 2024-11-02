import React from "react";
import Clock from "react-simple-clock";
export default function ClockTime() {
  return (
    <div className="max-w-max py-5 mx-auto">
      <Clock
        size={200}
        live={true}
        hourMarkFormat="number"
        className="clock-style"
        mode="dark"
      />
    </div>
  );
}
