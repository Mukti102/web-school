import axios from "axios";
export const BASE_URL = 'https://vith.my.id/backend/public/api/';
export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {'X-Custom-Header': 'foobar'}
  });
export const CSRF = async() => {
  try {
    const response = await axios.get('https://vith.my.id/backend/public/sanctum/csrf-cookie', {
      withCredentials: true, // Pastikan cookies dikirim dengan permintaan
    });
    return response;
    console.log(response.data); // Cek data yang diterima
  } catch (error) {
    console.error('Error fetching CSRF cookie:', error.response);
  }
}