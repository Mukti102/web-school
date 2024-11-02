import React, { useEffect, useState } from "react";
import CardInformation from "./CardInformation";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import axios from "axios";
import { BASE_URL } from "../../../../api/api";

export default function CardsContainer() {
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const StudentsHaveNotProcess = students?.filter(
    (i) => i?.status === "belum di Proses"
  );

  const fetchData = async () => {
    try {
      const students = await axios.get(`${BASE_URL}students`);
      const user = await axios.get(`${BASE_URL}user`);
      const articles = await axios.get(`${BASE_URL}articles`);
      setArticles(articles.data?.data);
      setStudents(students.data?.data);
      setUsers(user.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2  mt-3 gap-3">
      <CardInformation
        bgColor="bg-blue-500"
        Icon={<IoIosPeople />}
        count={StudentsHaveNotProcess?.length}
        title={"Siswa Baru"}
      />
      <CardInformation
        bgColor="bg-purple-500"
        Icon={<PiArticleNyTimesFill />}
        count={articles.length}
        title={"Berita"}
      />
      <CardInformation
        Icon={<IoIosPeople />}
        count={users?.length}
        bgColor="bg-orange-500"
        title={"User"}
      />
    </div>
  );
}
