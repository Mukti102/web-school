import React, { useRef, useState } from "react";
import AppStore from "../store/AppStore";

export default function useGaleryUpload() {
  const { setGaleries, FormData } = AppStore((state) => state);
  const uploadRef = useRef(null);
  const [galery, setGalery] = useState([]);
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setGalery([...galery, { photo: url }]);
    setGaleries([...FormData.galery, file]);
  };

  return {
    uploadRef,
    galery,
    setGalery,
    handleUpload,
  };
}
