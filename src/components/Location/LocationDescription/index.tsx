"use client";
import LocationMapDirect from "./LcoationMapDirect";
import LocationMap from "./LocationMap";
import { LocationTransportation } from "./LocationTransportation";

export default function LocationDescription() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <LocationMap />
        <LocationMapDirect />
      </div>
      <LocationTransportation />
    </>
  );
}
