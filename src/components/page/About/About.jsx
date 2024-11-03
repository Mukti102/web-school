import React from "react";
import useFetch from "../../../hooks/useFetch";
import HTMLReactParser from "html-react-parser";
import Loading from "../../Loading";

export default function About() {
  const { data, isLoading } = useFetch("about-school");
  const { tentang_sekolah, visi, misi } = data;
  if (isLoading) return <Loading />;
  return (
    <section className="w-full pt-16 bg-background text-text ">
      {/* about */}
      <div
        className="w-full flex  justify-center relative items-center bg-center bg-no-repeat bg-cover sm:bg-cover bg-fixed h-64 sm:h-screen"
        style={{
          backgroundImage:
            "url(https://www.ui.ac.id/wp-content/uploads/2022/12/home_whyui-700x450.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 left-0 bg-black bg-opacity-40 bottom-0"></div>
        <div className="text-center  z-50 p-5 sm:p-10 ">
          <h1 className="sm:text-5xl text-2xl w-max mx-auto font-semibold text-white py-2.5 border-b-[2px] border-primary">
            Tentang Sekolah
          </h1>
          <article className="sm:mt-10 mt-5 prose font-light sm:text-base text-xs text-gray-200">
            {HTMLReactParser(`${tentang_sekolah}`)}
          </article>
        </div>
      </div>
      {/* visi misi */}
      <div className="sm:flex h-screen">
        <div className="sm:w-1/2 w-full text-center dark:text-black bg-primary sm:pt-20 py-10 sm:py-10 px-5 sm:px-16 text-white">
          <h1 className="font-bold sm:text-4xl text-2xl mb-3 sm:mb-8">Visi </h1>
          <article className="font-light text-start leading-5 prose text-white dark:text-black  sm:text-base text-xs">
            {HTMLReactParser(`${visi}`)}
          </article>
        </div>
        <div className="sm:w-1/2  w-full bg-gray-200 text-black sm:pt-20 py-10 sm:py-10 px-5 sm:px-16">
          <h1 className="font-bold sm:text-4xl  text-2xl text-center">Misi</h1>
          <article className="font-light leading-5 prose sm:text-base text-xs">
            {HTMLReactParser(`${misi}`)}
          </article>
        </div>
      </div>
    </section>
  );
}
