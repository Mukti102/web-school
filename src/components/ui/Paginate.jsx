import React, { useEffect, useState } from "react";
// import { Pagination } from "flowbite-react";
import Pagination from "./Pagination";
import usePaginate from "../../hooks/usePaginate";
import AppStore from "../../store/AppStore";
import { useNavigate } from "react-router-dom";

export default function Paginate({ name = "berita" }) {
  const { linkPaginates } = AppStore((state) => state);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate(`/${name}?page=${page}`);
  };
  useEffect(() => {
    if (linkPaginates?.length === 2) {
      setCurrentPage(linkPaginates[1]?.current_page);
      setTotalPages(linkPaginates[1]?.links?.length);
    }
  }, [linkPaginates]);
  if (totalPages) {
    return (
      <div className="flex mt-12 overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage === undefined ? 1 : currentPage}
          totalPages={totalPages === undefined ? 1 : totalPages - 2}
          onPageChange={onPageChange}
          // showIcons
        />
      </div>
    );
  }
}
