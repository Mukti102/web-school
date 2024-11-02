import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";
import PrivateRoute from "./utils/PrivateRoute";
import DashboardRoutes from "./Routes/DashboardRoutes";
import FrontendRoutes from "./Routes/FrontendRoutes";
import MobileNavbar from "./components/MobileNav";

function App() {
  const location = useLocation();
  const { isDarkMode, handleToggle } = useDarkMode(); // Replace with your actual toggle function
  const hideNavbarAndFooter = location.pathname.includes("dashboard");

  return (
    <div className={`${isDarkMode ? "dark" : ""}  overflow-x-hidden`}>
      {!hideNavbarAndFooter && (
        <>
          <Navbar isDarkMode={isDarkMode} handleToggle={handleToggle} />
          <MobileNavbar handleToggle={handleToggle} isDarkMode={isDarkMode} />
        </>
      )}
      <Routes>
        {FrontendRoutes}
        <Route element={<PrivateRoute />}>{DashboardRoutes}</Route>
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
