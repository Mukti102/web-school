import React from "react";
import ViewBase from "../ui/ViewBase";
import LoadingText from "../ui/LoadingBtn";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

export default function ViewVideo() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`video/${id}`);
  return <ViewBase type="video" data={data} isLoading={isLoading}></ViewBase>;
}
