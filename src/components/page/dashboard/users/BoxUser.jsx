import React from "react";
import useFetch from "../../../../hooks/useFetch";
export default function BoxUser() {
  const { data, isLoading } = useFetch("user", 4);
  return (
    <div className="bg-white mt-3 px-6  p-3 rounded-lg shadow-primary">
      <span className="text-[.9rem] block font-semibold text-gray-600 py-1 border-b-[1.5px] border-gray-100">
        User
      </span>
      {/* cards user */}
      <div className="flex flex-col gap-1 mt-2">
        {data?.map((item) => (
          <LongCard item={item} />
        ))}
      </div>
    </div>
  );
}

const LongCard = ({ item }) => {
  return (
    <div className="flex gap-3 py-2 border-b-[1.5px] border-gray-100">
      {/* avatar */}
      <div>
        <img
          class="w-10 h-10 rounded-full object-cover"
          src={
            item?.profile
              ? item?.profile
              : "https://i.pinimg.com/enabled/564x/db/02/4e/db024e645ec7680d093338ac492efb63.jpg"
          }
          alt="Rounded avatar"
        />
      </div>
      <div>
        <h3 className="text-xs font-semibold text-gray-800">{item?.name}</h3>
        <p className="text-[10px] text-gray-400">{item?.email}</p>
      </div>
    </div>
  );
};
