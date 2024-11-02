import React from "react";
import Dashboard from "../components/page/dashboard";
import Main from "../components/page/dashboard/Main";
import DashboardArticle from "../components/page/dashboard/Article/DashboardArticle";
import ViewArticle from "../components/page/dashboard/Article/ViewArticle";
import EditArticle from "../components/page/dashboard/Article/EditArticles";
import AddArticle from "../components/page/dashboard/Article/AddArticle";
import User from "../components/page/dashboard/users/User";
import AddUser from "../components/page/dashboard/users/AddUser";
import EditUser from "../components/page/dashboard/users/EditUser";
import DashboardEvents from "../components/page/dashboard/Events/DashboardEvents";
import ViewEvent from "../components/page/dashboard/Events/ViewEvent";
import AddEvent from "../components/page/dashboard/Events/AddEvent";
import EditAgenda from "../components/page/dashboard/Events/EditAgenda";
import DashboardAnnouncment from "../components/page/dashboard/Announcments/DashboardAnnouncment";
import AddAnnoucment from "../components/page/dashboard/Announcments/AddAnnounc";
import EditAnnouncment from "../components/page/dashboard/Announcments/EditAnnouncment";
import ViewAnnouncment from "../components/page/dashboard/Announcments/ViewAnnouncment";
import DashboardPrestasi from "../components/page/dashboard/prestation/DashboardPrestasi";
import ViewPrestation from "../components/page/dashboard/prestation/ViewPrestation";
import AddPrestation from "../components/page/dashboard/prestation/AddPrestation";
import EditPrestation from "../components/page/dashboard/prestation/EditPrestation";
import DashboardFasilitas from "../components/page/dashboard/Fasilities";
import AddFasilitas from "../components/page/dashboard/Fasilities/AddFasilitas";
import EditFasilitas from "../components/page/dashboard/Fasilities/EditFasilitas";
import ViewFasilitas from "../components/page/dashboard/Fasilities/ViewFasilitas";
import DashboardExtracuriculer from "../components/page/dashboard/Extra";
import AddExtrakurikuler from "../components/page/dashboard/Extra/AddExtrakurikuler";
import EditExtrakurikuler from "../components/page/dashboard/Extra/EditExtrakurikuler";
import ViewExtrakurikuler from "../components/page/dashboard/Extra/ViewExtrakurikuler";
import AddJurusan from "../components/page/dashboard/Jurusan/AddJurusan";
import Jurusan from "../components/page/dashboard/Jurusan";
import EditJurusan from "../components/page/dashboard/Jurusan/EditJurusan";
import AboutScholl from "../components/page/dashboard/about/Index";
import Galery from "../components/page/dashboard/Galery/Index";
import Video from "../components/page/dashboard/video";
import AddVideo from "../components/page/dashboard/video/AddVideo";
import EditVideo from "../components/page/dashboard/video/EditVideo";
import Students from "../components/page/dashboard/Students";
import ViewStudent from "../components/page/dashboard/Students/ViewStudent";
import EditStudent from "../components/page/dashboard/Students/EditStudent";
import Setting from "../components/page/dashboard/Setting";
import Pendaftaran from "../components/page/dashboard/pendaftaran";
import TablePendaftaran from "../components/page/dashboard/pendaftaran/TablePendaftaran";
import FormPendaftaran from "../components/page/dashboard/pendaftaran/FormPendaftaran";
import AlumniDashboard from "../components/page/dashboard/Alumni";
import AddAlumni from "../components/page/dashboard/Alumni/AddAlumni";
import EditAlumni from "../components/page/dashboard/Alumni/EditAlumni";
import Profile from "../components/page/dashboard/Profile";
import { Outlet, Route, Routes } from "react-router-dom";
import ViewJurusan from "../components/page/dashboard/Jurusan/ViewJurusan";
import ViewVideo from "../components/page/dashboard/video/View";
import ProfileSchool from "../components/page/dashboard/ProfileSchool";
import DownLoadPdf from "../components/page/dashboard/Students/DownLoadPdf";
import { Navigate } from "react-router-dom";
import AppStore from "../store/AppStore";
import EditPendaftaran from "../components/page/dashboard/pendaftaran/EditPendaftaran";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = AppStore((state) => state);
  if (!isAdmin) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

export default [
  <Route path="/dashboard" element={<Dashboard />}>
    {/* Route utama untuk dashboard */}
    <Route index element={<Main />} />

    {/* Route Pendaftaran dan Profile, dapat diakses oleh semua pengguna */}
    <Route path="pendaftaran">
      <Route index element={<Pendaftaran />} />
      <Route path=":gelombang/detail/:id" element={<ViewStudent />} />
      <Route path=":gelombang/detail/:id/edit" element={<EditPendaftaran />} />
      <Route path=":id/detail/:id/print" element={<DownLoadPdf />} />
      <Route path=":gelombang/create" element={<FormPendaftaran />} />
      <Route path=":id" element={<TablePendaftaran />} />
    </Route>

    <Route path="profile" element={<Profile />} />

    {/* just admin can acces this */}
    <Route element={<ProtectedRoute />}>
      <Route path="articles" element={<DashboardArticle />} />
      <Route path="articles/create" element={<AddArticle />} />
      <Route path="articles/:id" element={<ViewArticle />} />
      <Route path="articles/:id/edit" element={<EditArticle />} />

      <Route path="user" element={<User />} />
      <Route path="user/create" element={<AddUser />} />
      <Route path="user/:id/edit" element={<EditUser />} />

      <Route path="agenda" element={<DashboardEvents />} />
      <Route path="agenda/create" element={<AddEvent />} />
      <Route path="agenda/:id" element={<ViewEvent />} />
      <Route path="agenda/:id/edit" element={<EditAgenda />} />

      <Route path="announcment" element={<DashboardAnnouncment />} />
      <Route path="announcment/create" element={<AddAnnoucment />} />
      <Route path="announcment/:id" element={<ViewAnnouncment />} />
      <Route path="announcment/:id/edit" element={<EditAnnouncment />} />

      <Route path="prestasi" element={<DashboardPrestasi />} />
      <Route path="prestasi/create" element={<AddPrestation />} />
      <Route path="prestasi/:id" element={<ViewPrestation />} />
      <Route path="prestasi/:id/edit" element={<EditPrestation />} />

      <Route path="facilities" element={<DashboardFasilitas />} />
      <Route path="facilities/create" element={<AddFasilitas />} />
      <Route path="facilities/:id" element={<ViewFasilitas />} />
      <Route path="facilities/:id/edit" element={<EditFasilitas />} />

      <Route path="extrakurikuler" element={<DashboardExtracuriculer />} />
      <Route path="extrakurikuler/create" element={<AddExtrakurikuler />} />
      <Route path="extrakurikuler/:id" element={<ViewExtrakurikuler />} />
      <Route path="extrakurikuler/:id/edit" element={<EditExtrakurikuler />} />

      <Route path="jurusan" element={<Jurusan />} />
      <Route path="jurusan/create" element={<AddJurusan />} />
      <Route path="jurusan/:id" element={<ViewJurusan />} />
      <Route path="jurusan/:id/edit" element={<EditJurusan />} />

      <Route path="tentang/:id" element={<AboutScholl />} />

      <Route path="profile-school" element={<ProfileSchool />} />

      <Route path="galery" element={<Galery />} />
      <Route path="setting" element={<Setting />} />

      <Route path="video" element={<Video />} />
      <Route path="video/:id" element={<ViewVideo />} />
      <Route path="video/create" element={<AddVideo />} />
      <Route path="video/:id/edit" element={<EditVideo />} />

      <Route path="students" element={<Students />} />
      <Route path="students/:id" element={<ViewStudent />} />
      <Route path="students/:id/edit" element={<EditStudent />} />

      <Route path="alumni" element={<AlumniDashboard />} />
      <Route path="alumni/create" element={<AddAlumni />} />
      <Route path="alumni/:id/edit" element={<EditAlumni />} />
    </Route>
  </Route>,
];
