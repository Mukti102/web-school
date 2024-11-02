import { useState, useEffect } from "react";
import { apiClient } from "../api/api"; // Pastikan path ini sesuai dengan path apiClient Anda

const useFetch = (target, limit) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [meta, setMeta] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await apiClient.get(target, {
          params: { limit },
        });
        setData(res.data.data);
        setLinks(res?.data?.links);
        setMeta(res?.data?.meta);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [target, limit]);

  return { data, isLoading, links, meta };
};

export default useFetch;
