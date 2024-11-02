import React from "react";
import { Route } from "react-router-dom";
import Pendidikan from "../components/page/pendidikan";
import Fasilitas from "../components/page/Fasilitas";
import AllArticle from "../components/page/Articles/AllArticle";
import AllEvent from "../components/page/events/allEvent";
import AllFasilitas from "../components/page/Fasilitas/AllFasilitas";
import DetailArticle from "../components/page/Articles/DetailArticle";
import DetailAgenda from "../components/page/events/index";
import AllPrestation from "../components/page/prestation/AllPrestation";
import DetailPrestation from "../components/page/prestation";
import AllAnnouncment from "../components/page/announcment/AllAnnouncment";
import Announcment from "../components/page/announcment";
import DetailVideo from "../components/page/Video";
import AllVideo from "../components/page/Video/AllVideo";
import AllExtracuriculer from "../components/page/Extracuriculer/AllExtracuriculer";
import DetailExtracuriculer from "../components/page/Extracuriculer";
import About from "../components/page/About/About";
import Psb from "../components/page/pendaftaran/Psb";
import Login from "../components/page/Auth/Login";
import NotFound from "../components/NotFound";
import Home from "../components/page/Home/Home";
import Register from "../components/page/Auth/Register";
import DetailJurusan from "../components/page/jurusan/DetailJurusan";
import ArticlesTags from "../components/page/Articles/ArticlesTags";

// export default function FrontendRoutes() {
//   return (
//     <>
export default [
  <Route path="/" element={<Home />} key={"home"} />,
  <Route path="/pendidikan" element={<Pendidikan />} key={"pendidikan"} />,
  <Route path="/jurusan/:id" element={<DetailJurusan />} />,
  <Route path="/fasilitas/:id" element={<Fasilitas />} />,
  <Route path="/berita" element={<AllArticle />} />,
  <Route path="/agenda" element={<AllEvent />} />,
  <Route path="/fasilitas" element={<AllFasilitas />} />,
  <Route path="/berita/:id" element={<DetailArticle />} />,
  <Route path="/berita/tags/:tagsname" element={<ArticlesTags />} />,
  <Route path="/agenda/:id" element={<DetailAgenda />} />,
  <Route path="/prestasi" element={<AllPrestation />} />,
  <Route path="/prestasi/:id" element={<DetailPrestation />} />,
  <Route path="/announcment" element={<AllAnnouncment />} />,
  <Route path="/announcment/:id" element={<Announcment />} />,
  <Route path="/video/:id" element={<DetailVideo />} />,
  <Route path="/video" element={<AllVideo />} />,
  <Route path="/extracuriculer/:id" element={<DetailExtracuriculer />} />,
  <Route path="/extracuriculer" element={<AllExtracuriculer />} />,
  <Route path="/tentang-sekolah" element={<About />} />,
  <Route path="/pendaftaran" element={<Psb />} />,
  <Route path="/login" element={<Login />} />,
  <Route path="/register" element={<Register />} />,
  <Route path="*" element={<NotFound />} />,
];
//     {/* </>
//   );
// } */}
