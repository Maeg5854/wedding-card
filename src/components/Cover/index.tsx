"use client";
import CoverTitle from "./Title";
import CoverPhotoFrame from "./CoverPhotoFrame";
import { ImageRepository } from "@/app/repository/ImageRepository";
import { useEffect, useState } from "react";
import Summary from "./Summary";

export default function Cover() {
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
    <div
      style={{
        width: "100%",
        height: "812px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <div>
        <CoverTitle style={{ height: "100px" }} />
        <CoverPhotoFrame src={cover} />
      </div>
      <Summary />
    </div>
  );
}
