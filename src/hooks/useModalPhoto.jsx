import React, { useState } from "react";

export default function useModalPhoto() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return {
    isModalOpen,
    selectedImage,
    openModal,
    closeModal,
  };
}
