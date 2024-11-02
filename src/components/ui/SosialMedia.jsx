import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function SosialMedia() {
  const [sosialMedia, setSosialMedia] = useState(null);
  const { data, isLoading } = useFetch("social-media");
  useEffect(() => {
    if (data) {
      setSosialMedia(data);
    }
  }, [data]);
  //   const { instagram, facebook, youtube, linkedind, twitter } = sosialMedia;
  console.log(data);
  const sosial_media = [
    {
      id: 1,
      icon: <RiInstagramFill />,
      link: instagram,
    },
    {
      id: 2,
      icon: <FaFacebook />,
      link: facebook,
    },
    {
      id: 3,
      icon: <FaYoutube />,
      link: youtube,
    },
    {
      id: 4,
      icon: <BsTwitterX />,
      link: twitter,
    },
    {
      id: 5,
      icon: <FaLinkedin />,
      link: linkedind,
    },
  ];
  return sosial_media;
}
