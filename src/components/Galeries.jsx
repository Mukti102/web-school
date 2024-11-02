import React, { useState } from "react";
import HeadingH1 from "./ui/HeadingH1";
import ModalPhoto from "./ModalPhoto";
import { AnimatePresence, motion } from "framer-motion";
import useModalPhoto from "../hooks/useModalPhoto";
import useFetch from "../hooks/useFetch";
export default function Galeries() {
  const { isModalOpen, selectedImage, openModal, closeModal } = useModalPhoto();
  const { data, isLoading } = useFetch("galery");
  const images = data?.map((e) => e?.photo);
  const [firstImage, ...restImage] = images;
  return (
    <section className="mt-10">
      <HeadingH1>Galeri Sekolah</HeadingH1>
      <section className="py-6 sm:px-10 bg-background dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4  sm:p-4 mx-auto md:grid-cols-4">
          <img
            src={firstImage}
            alt=""
            onClick={() => openModal(firstImage)}
            className="w-full hover:scale-105 cursor-pointer transition-all duration-200 object-cover h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          {restImage.map((item, idx) => {
            return (
              <motion.img
                key={idx}
                whileHover={{ scale: 1.05 }}
                alt=""
                onClick={() => openModal(item)}
                className="w-full  cursor-pointer object-cover h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={item}
              />
            );
          })}
        </div>
        <ModalPhoto
          isOpen={isModalOpen}
          onClose={closeModal}
          imgSrc={selectedImage}
        />
      </section>
    </section>
  );
}
