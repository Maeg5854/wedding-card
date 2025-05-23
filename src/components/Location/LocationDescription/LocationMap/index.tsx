"use client";

import { Map } from "react-kakao-maps-sdk";

export default function LocationMap() {
  return (
    <Map
      center={{ lat: 37.566826, lng: 126.9786567 }}
      style={{ width: "500px", height: "300px", border: "1px solid black" }}
      level={3}
    />
  );
}
