import React from "react";
import { motion, useScroll } from "framer-motion";
export default function ScrollTop() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="w-full bg-yellow-300 fixed top-0 h-[2.7px]  z-[10001]"
      style={{
        scaleX: scrollYProgress,
        transition: { duration: 0.5 },
        transformOrigin: "left",
      }} // Apply the scaleX transformation here
    ></motion.div>
  );
}
