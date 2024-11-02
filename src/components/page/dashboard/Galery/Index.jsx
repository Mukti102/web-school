import React, { useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import RequestStore from "../../../../store/RequestStore";
import Swal from "sweetalert2";
import useFetch from "../../../../hooks/useFetch";
import { IoClose } from "react-icons/io5";
import LoadingText from "../ui/LoadingBtn";
import Loading from "../../../Loading";
export default function Galery() {
  const inputRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { store, destroy } = RequestStore((state) => state);
  const { data } = useFetch("galery");
  const [galeries, setGaleries] = React.useState([]);
  useEffect(() => {
    if (data) setGaleries(data);
  }, [data]);
  const handleUpload = async () => {
    setIsLoading(true);
    const file = inputRef.current.files[0];
    const url = URL.createObjectURL(file);
    const res = await store("galery", {
      photo: file,
    });
    if (res.status == "success") {
      setGaleries([
        ...galeries,
        { id: galeries[galeries.length - 1]?.id + 1, photo: url },
      ]);
      setIsLoading(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: res.message,
      });
    }
  };
  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await destroy(`galery/${id}`);
    console.log(response);
    if (response?.data.status == "success") {
      setGaleries(galeries.filter((item) => item.id !== id));
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Gagal Di hapus",
      });
    }
  };
  return (
    <div className="overflow-hidden py-5  px-5 shadow-primary bg-white  rounded-lg  w-full">
      <h1 className="text-3xl font-bold py-3">Galeri</h1>
      <div className="w-full grid grid-cols-4 gap-5">
        {galeries?.map((item, index) => (
          <div
            key={index}
            className="w-full relative border-2 border-gray-700 rounded-lg"
          >
            <span
              onClick={(e) => handleDelete(e, item?.id)}
              className=" flex justify-center items-center  w-5 h-5 bg-red-500  text-white rounded-full p-2  cursor-pointer absolute -top-3 -right-3 "
            >
              <span className="text-sm">
                <IoClose />
              </span>
            </span>
            <img
              src={item?.photo}
              className="h-40 w-full object-cover rounded-lg"
              alt=""
            />
          </div>
        ))}
        <div
          onClick={() => inputRef.current.click()}
          className="h-40 flex-col cursor-pointer flex border-gray-500 border-2 border-dashed rounded-md justify-center items-center"
        >
          <input
            ref={inputRef}
            onChange={handleUpload}
            type="file"
            className="w-full hidden"
          />
          <span className="text-5xl text-gray-400">
            <FaCamera />
          </span>
          <p className="text-gray-500 text-xl lowercase my-2">Upload</p>
        </div>
      </div>
    </div>
  );
}
