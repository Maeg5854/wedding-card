"use client";

import Image from "next/image";
import { PiHeartLight } from "react-icons/pi";

export default function CoverPhotoFrame({
  style,
  src,
}: {
  style: React.CSSProperties;
  src: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      <svg width="300px" height="450px" viewBox="0 0 300 450">
        <defs>
          <clipPath id="archwindow">
            <path
              d="M 0 150 
                 A 150 150 0 0 1 300 150"
              fill="red"
            />
            <rect x="0" y="150" width="300" height="300" fill="red" />
          </clipPath>
        </defs>
        <g clipPath="url(#archwindow)">
          <image href={src} width="300" height="450" />
        </g>
      </svg>
      <div
        style={{
          zIndex: 1,
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "0 10px",
          gap: 2,
          alignItems: "center",
          bottom: 10,
        }}
      >
        <Image
          src={"/images/metamong_white.png"}
          width={25}
          height={22}
          alt="damgomi"
        />
        <div>
          <div>
            <PiHeartLight
              style={{
                zIndex: 1,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 10,
              }}
              size={20}
              color="white"
            />
          </div>
          <div
            style={{
              width: "calc(100% - 80px)",
              height: "1px",
              backgroundColor: "white",
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <Image
          src={"/images/damgomi_white.png"}
          width={27.06}
          height={23}
          alt="damgomi"
        />
      </div>
    </div>
  );
}
