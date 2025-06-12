"use client";

import { storage } from "@/app/firebase/config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function PhotoAlbum() {
  const [albumInput, setAlbumInput] = useState<
    { src: string; width: number; height: number }[]
  >([]);
  const [isMorePhotos, setIsMorePhotos] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMorePhotos(!isMorePhotos);
  };

  useEffect(() => {
    getPhotos().then((photos) => {
      setAlbumInput(photos.albumInput);
    });
  }, []);

  return (
    <div
      style={{
        margin: "0 20px",
        maxWidth: "350px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ImageWrapper $isMoreView={isMorePhotos}>
        <ColumnsPhotoAlbum
          photos={albumInput}
          columns={(containerWidth) => {
            if (containerWidth < 100) return 1;
            return 3;
          }}
          spacing={10}
        />
      </ImageWrapper>
      <MoreViewButtonWrapper $isMoreView={isMorePhotos}>
        <MoreViewButton
          onClick={onClickImageMoreViewButton}
          $isMoreView={isMorePhotos}
        >
          {isMorePhotos ? (
            <IoIosArrowUp size={15} style={{ zIndex: "1", color: "black" }} />
          ) : (
            <IoIosArrowDown size={15} style={{ zIndex: "1", color: "black" }} />
          )}
        </MoreViewButton>
      </MoreViewButtonWrapper>
    </div>
  );
}

const getPhotos = async () => {
  const listRef = ref(
    storage,
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_PREFIX
  );
  const res = await listAll(listRef);
  const photos = await Promise.all(
    res.items.map(async (a) => {
      const url = await getDownloadURL(ref(storage, a.fullPath));

      const getImageDimensions = (
        src: string
      ): Promise<{ width: number; height: number }> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
          };
          img.src = src;
        });
      };
      const dimensions = await getImageDimensions(url);
      return {
        src: url,
        originalWidth: dimensions.width / 2,
        width: dimensions.width,
        height: dimensions.height,
      };
    })
  );

  const firstColumn = [];
  const secondColumn = [];
  const thirdColumn = [];
  for (const photo of photos) {
    if (firstColumn.length <= secondColumn.length) {
      firstColumn.push(photo);
    } else if (secondColumn.length <= thirdColumn.length) {
      secondColumn.push(photo);
    } else {
      thirdColumn.push(photo);
    }
  }

  return {
    albumInput: [...firstColumn, ...secondColumn, ...thirdColumn],
    photos,
  };
};

const ImageWrapper = styled.div<{ $isMoreView: boolean }>`
  max-height: ${(props) => (props.$isMoreView ? "1100px" : "400px")};
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const MoreViewButtonWrapper = styled.div<{ $isMoreView: boolean }>`
  position: ${(props) => (props.$isMoreView ? "static" : "relative")};
  width: 100%;
  margin-top: ${(props) => (props.$isMoreView ? "20px" : "0px")};
  margin-bottom: ${(props) => (props.$isMoreView ? "20px" : "0px")};
  & ::before {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: ${(props) => (props.$isMoreView ? "0" : "100px")};
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgb(255, 255, 255) 100%
    );
    content: "";
    display: ${(props) => (props.$isMoreView ? "none" : "block")};
  }
`;

const MoreViewButton = styled.button<{ $isMoreView: boolean }>`
  position: ${(props) => (props.$isMoreView ? "static" : "absolute")};
  bottom: ${(props) => (props.$isMoreView ? "auto" : "0px")};
  left: ${(props) => (props.$isMoreView ? "auto" : "50%")};
  transform: ${(props) => (props.$isMoreView ? "none" : "translateX(-50%)")};
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
