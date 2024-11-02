import React from "react";
import { AnimatePresence, motion } from "framer-motion";
function ModalPhoto({ isOpen, onClose, imgSrc, sizePhoto = "w-full h-auto" }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[100002] bg-black bg-opacity-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, scale: 0 }}
          className="relative bg-white p-4 rounded shadow-lg max-w-3xl w-full"
        >
          <button
            className="absolute top-2 right-2 text-gray-600"
            onClick={onClose}
          >
            &times;
          </button>
          <img
            src={imgSrc}
            alt="Enlarged"
            className={`${sizePhoto}  rounded`}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalPhoto;
