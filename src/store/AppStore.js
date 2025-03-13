import axios from 'axios';
import { create } from 'zustand'
import { CSRF, apiClient } from '../api/api';
import { BASE_URL } from '../api/api';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const RoleDefault = localStorage?.getItem('user') ? JSON.parse(localStorage?.getItem('user')) : null 
console.log('store',RoleDefault);
const AppStore = create((set) => ({
  categories : [],
  dataSekolah: null,
  linkPaginates:[],
  authUser:null,
  isAdmin: RoleDefault?.role_id == 1 ,
  currentThumbnail : null,
  temporyData:[],
  isAuthenticated:false,
  options : {
    jurusans : [],
    categories : [],
  },
  FormData: {},
  setAuthUser : (data) => set((state) => ({authUser : data})),
  setDataSekolah : (data) => set((state) => ({dataSekolah : data})),
  setIsAdmin : (data) => set((state) => ({isAdmin : data})),
  setIsAuthenticated : (data) => set((state) => ({isAuthenticated : data})),
  setLinksPaginates : (data) => set((state) => ({linkPaginates : data})), 
  setOptions: (data) => set((state) => ({ options: data })),
  setTemporyData: (data) => set((state) => ({ temporyData: data })),
  setCurrentThumbnail: (string) => set((state) => ({ currentThumbnail: string })),
  setInitialFormData : (data) => {
    set((state) => {
      return {
        FormData: data
      }
    })
  },
  setCategory : (data) => {
    set((state) => {
      return {
        categories: data
      }
    })
  },
  setGaleries : (data) => {
    set((state) => {
      return {
        FormData: {
          ...state.FormData,
          galery: data
        }
      }
    })
  },
  handleChange : (e, editor) => {
    const { name, type, files, value ,multiple } =  e.target;
    set((state) => {
      if (type === "file" && multiple == false) {
        if(name === "thumbnail"){
        const file = files[0];
          return {
            currentThumbnail: URL.createObjectURL(file),
               FormData: {
              ...state.FormData,
              [name]: file,
            },
          }
        }
        const file = files[0];
          return {
            FormData: {
              ...state.FormData,
              [name]: file,
            },
          };
          
        }else if(type === "file" && multiple == true){
          return {
            FormData: {
              ...state.FormData,
              [name]: [...files],
            },
          }

        } 
        else if (type === "textarea") {
          return {
            FormData: {
              ...state.FormData,
              [name]: editor.getData(),
            },
          };
        }
         else {
          return {
            FormData: {
              ...state.FormData,
              [name]: value,
            },
          };
        }
      });
  }
}))

export default AppStore