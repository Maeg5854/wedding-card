"use client";
import ConverTitle from "./Title";
import CoverPhotoFrame from "./ConverPhotoFrame";
import { ImageRepository } from "@/app/repository/ImageRepository";
import { useEffect, useState } from "react";

export default function Conver() {
  const [cover, setCover] = useState<string | null>(null);
  useEffect(() => {
    ImageRepository.getInstance()
      .getCover()
      .then((cover) => {
        setCover(cover);
      });
  }, []);
  if (!cover) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ConverTitle />
      <CoverPhotoFrame
        style={{ position: "relative", top: "-100px", zIndex: -1 }}
        src={cover}
      />
    </div>
  );
}
