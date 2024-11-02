import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../components/page/Auth/Login"; // Sesuaikan path import sesuai kebutuhan
import axios from "axios";
import { BASE_URL, CSRF } from "../api/api"; // Sesuaikan path import sesuai kebutuhan
import Cookies from "js-cookie";
import Loading from "../components/Loading";
import AppStore from "../store/AppStore";

export default function PrivateRoute() {
  const { isAuthenticated, setIsAuthenticated } = AppStore((state) => state);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token");
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Dapatkan token CSRF sebelum memeriksa autentikasi
        await CSRF();
        const response = await axios.get(`${BASE_URL}auth-check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Pastikan cookie dikirim dengan permintaan
        });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      checkAuth();
    } else {
      setLoading(false);
      return;
    }
  }, [token]);
  // Tampilkan status loading saat memeriksa autentikasi
  if (loading) return <Loading />;
  return isAuthenticated ? <Outlet /> : <Login />;
  // Redirect ke login jika tidak terautentikasi
}
