import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FadeRight } from "../../anim/FadeUp";
import HeadingH2 from "../../ui/HeadingH2";
import parse from "html-react-parser";

import ImageGallery from "react-image-gallery";

export default function DetailJurusan() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`jurusan/${id}`);
  const galeries = data?.galery?.map((e) => {
    return { original: e?.photo, thumbnail: e?.photo };
  });
  const images = [
    {
      original: "https://ugm.ac.id/wp-content/uploads/2022/11/feb-2.jpg",
      thumbnail: "https://ugm.ac.id/wp-content/uploads/2022/11/feb-2.jpg",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <FadeRight>
        <section className="w-full gap-7 pt-24 sm:pt-52 bg-background text-text flex-col sm:flex-row sm:flex px-5 sm:px-14">
          <div className="flex-1">
            <HeadingH2>{data?.title}</HeadingH2>
            <article className="text-xs leading-5">
              {parse(`${data?.description}`)}
            </article>
          </div>
          <div className="flex-1 sm:mt-0 mt-5">
            <ImageGallery
              autoPlay
              useTranslate3D
              showPlayButton={false}
              infinite
              renderLeftNav={() => null}
              renderRightNav={() => null}
              items={galeries !== undefined ? galeries : images}
            />
          </div>
        </section>
      </FadeRight>
    </>
  );
}
