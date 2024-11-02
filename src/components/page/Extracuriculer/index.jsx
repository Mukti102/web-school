import React from "react";
import Detail from "../../ui/Detail";
import { IoIosPerson, IoIosTime } from "react-icons/io";
import useModalPhoto from "../../../hooks/useModalPhoto";
import ModalPhoto from "../../ModalPhoto";
import { motion } from "framer-motion";
import Detail2 from "../../Detail2";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function DetailExtracuriculer() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`extrakurikuler/${id}`);

  return <Detail2 data={data}>{data?.title}</Detail2>;
}
