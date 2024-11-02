import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function FadeUp({ children }) {
  return (
    <div className="relative bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeRight({ children }) {
  return (
    <div className="relative overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
