import axios from 'axios';
import { create } from 'zustand'
import { CSRF, apiClient } from '../api/api';
import { BASE_URL } from '../api/api';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
const AuthStore = create((set) => ({
  token: localStorage.getItem("token"),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  login : async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email,
        password,
      }, { withCredentials: true }); // Pastikan cookies dikirim
      
      const token = response.data.token;
      if (token) {
        // Simpan token di cookie
        Cookies.set('token', token, { expires: 1 }); // 1 hari
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response
      }
    } catch (error) {
      // Tampilkan pesan kesalahan jika perlu
      throw error;
    }
  },
  logout:async() => {
    const token = Cookies.get("token");
    const user = localStorage.getItem('user');
    try {
      await CSRF();
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: "POST",
        url: `${BASE_URL}logout`,
        data:user,
        withCredentials:true,
      }).then(response => {
        if(response?.data?.status === 'success'){
          Cookies.remove('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
        };
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.error("Logout failed", error.response?.data || error.message);
    }
  }
}))

export default AuthStore