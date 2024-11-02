import axios from 'axios';
import { create } from 'zustand'
import { CSRF, apiClient } from '../api/api';
import { BASE_URL } from '../api/api';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const RequestStore = create((set) => ({
  token: localStorage.getItem("token"),
  get : async(endpoint) => {
    const token = cookies.get('token')
    await CSRF();
    return new Promise((resolve, reject) => {
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        method: "GET",
        url: `${BASE_URL}${endpoint}`,
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    })
  },
  store:async(endpoint,body) => {
    const token = cookies.get('token')
    await CSRF();
    return new Promise((resolve, reject) => {
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        method: "POST",
        url: `${BASE_URL}${endpoint}`,
        data: body
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    })
  },
  update : async(endpoint,body) => {
    const token = cookies.get('token')
    await CSRF();
    return new Promise((resolve, reject) => {
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        method: "POST",
        url: `${BASE_URL}${endpoint}?_method=PUT`,
        data: body
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    })
  },
  destroy:async(endpoint) => {
    const token = cookies.get('token')
    await CSRF();
    return new Promise((resolve, reject) => {
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        url: `${BASE_URL}${endpoint}`,
      }).then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    })
  }
}))
export default RequestStore