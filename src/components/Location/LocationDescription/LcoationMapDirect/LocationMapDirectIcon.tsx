"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export function LocationMapDirectIcon({ map }: { map: LocationMapDirectDvcd }) {
  return (
    <LocationMapDirectIconContainer>
      <Image
        src={`/images/${map}.png`}
        alt={map}
        width={100}
        height={100}
        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
      />

      <Link
        href={
          (map == LocationMapDirectDvcd.KAKAO
            ? process.env.NEXT_PUBLIC_KAKAO_MAP_URL
            : map == LocationMapDirectDvcd.NAVER
            ? process.env.NEXT_PUBLIC_NAVER_MAP_URL
            : process.env.NEXT_PUBLIC_T_MAP_URL) || "https://map.kakao.com/"
        }
        target="_blank"
      >
        {map == LocationMapDirectDvcd.KAKAO
          ? "카카오맵"
          : map == LocationMapDirectDvcd.NAVER
          ? "네이버지도"
          : "티맵"}
      </Link>
    </LocationMapDirectIconContainer>
  );
}

export enum LocationMapDirectDvcd {
  T = "T_MAP",
  NAVER = "NAVER_MAP",
  KAKAO = "KAKAO_MAP",
}

const LocationMapDirectIconContainer = styled.div`
  display: flex;
  gap: 4px;
  font-family: "SeoulNamsanCB";
  vertical-align: middle;
`;
