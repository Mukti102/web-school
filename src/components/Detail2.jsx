import React from "react";
import Detail from "./ui/Detail";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import { motion } from "framer-motion";
import ModalPhoto from "./ModalPhoto";
import parse from "html-react-parser";
import useModalPhoto from "../hooks/useModalPhoto";
export default function Detail2({ children, data }) {
  const galeries = data?.galery?.map((e) => {
    return { image: e?.photo };
  });
  const { isModalOpen, selectedImage, openModal, closeModal } = useModalPhoto();
  return (
    <div className="w-full pt-18 sm:pt-24">
      <div
        className="w-full h-[20rem] bg-cover bg-center  sm:h-[27rem] sm:bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${data?.thumbnail})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
          <h2 className="sm:text-6xl text-3xl font-semibold text-white py-3 border-b-[3px] border-yellow-200">
            {children}
          </h2>
        </div>
      </div>
      <Detail>
        {/* title */}
        <div className="sm:text-4xl text-2xl font-medium pt-5 sm:mt-5">
          <h1>{data?.title}</h1>
        </div>
        <div className="flex gap-10 mt-3">
          <div className="flex gap-2 items-center">
            <span className="text-primary text-lg">
              <IoIosTime />
            </span>
            <span className="text-xs text-secondary">{data?.created_at}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary text-xl">
              <IoIosPerson />
            </span>
            <span className="text-xs text-secondary">{data?.author}</span>
          </div>
        </div>
        {/* image */}
        <div className="w-full h-96 mt-5">
          <img
            src={data?.thumbnail}
            // alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* article */}
        <div className="w-full mt-5">
          <article className="leading-7 sm:text-sm  text-sm">
            {parse(`${data?.description}`)}
          </article>
          <div className="mt-5 sm:text-sm text-xs font-medium">
            <span>Penulis: {data?.author}</span>
            <br />
          </div>
        </div>

        {/* galery */}
        <div>
          <div className="my-5 font-medium text-xl sm:font-semibold sm:text-2xl">
            <h3>Galery Extracuriculer</h3>
          </div>
          <div className="w-full flex gap-5 ">
            {galeries?.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="w-1/3 cursor-pointer rounded-md h-20 sm:h-44"
                onClick={() => openModal(item.image)}
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </motion.div>
            ))}
            <ModalPhoto
              isOpen={isModalOpen}
              onClose={closeModal}
              imgSrc={selectedImage}
            />
          </div>
        </div>
      </Detail>
    </div>
  );
}
