"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function LocationMap() {
  const position = { lat: 37.5427105, lng: 126.9516296 };
  return (
    <Map
      center={position}
      style={{
        width: "100%",
        height: "250px",
        borderRadius: "10px",
        border: "1px solid #DDDDDD",
      }}
      level={3}
    >
      <MapMarker position={position}>
        <div
          style={{
            color: "#000000",
            fontFamily: "SeoulNamsanCB",
            padding: "10px",
            paddingLeft: "35px",
            borderRadius: "10px",
            width: "100%",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          아펠가모 공덕
        </div>
      </MapMarker>
    </Map>
  );
}
