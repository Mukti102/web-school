import React, { useEffect, useRef } from "react";
import Service from "../../Service";
import Event from "../../Event";
import Extracuriculer from "../../Extracuriculer";
import Fasilities from "../../Fasilities";
import Galeries from "../../Galeries";
import Banner from "../../Banner";
import Alumnis from "../../Alumnis";
import Hero from "../../Hero";
import ArticleNews from "../../ArticleNews";
import Cta from "../../Cta";
import Articles from "../Articles";
import Education from "../../Education";
import Section from "../../Section";
import Videos from "../../Video";
import HeroVideo from "../../ui/HeroVideo";
import ScrollTop from "../../ScrollTop";
import Aos from "aos";
import axios from "axios";
import { BASE_URL } from "../../../api/api";
export default function Home() {
  const setVisitor = async () => {
    await axios.get(BASE_URL);
  };
  useEffect(() => {
    // set visitor
    setVisitor();
    Aos.init();
  }, []);
  return (
    <div>
      <div className="bg-background text-text">
        <ScrollTop />
        <Hero />
        {/* <HeroVideo /> */}
        <Service />
        <Education />
        <Articles />
        <Section />
        <Videos />
        <Fasilities />
        <Extracuriculer />
        <Galeries />
        <Event />
        <Alumnis />
        <Banner />
      </div>
    </div>
  );
}
