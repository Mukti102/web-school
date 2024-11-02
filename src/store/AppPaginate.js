import axios from 'axios';
import { create } from 'zustand'
import { CSRF, apiClient } from '../api/api';
import { BASE_URL } from '../api/api';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const AppPaginate = create((set) => ({
  token: localStorage.getItem("token"),
  endpoint:"",
  setEndpoint:(data) => set((state) => ({endpoint : data})),
}))

export default AppPaginate