"use client";
import LocationMapDirect from "./LcoationMapDirect";
import LocationMap from "./LocationMap";
import { LocationTransportation } from "./LocationTransportation";

export default function LocationDescription() {
  return (
    <>
      <LocationMap />
      <LocationMapDirect />
      <LocationTransportation />
    </>
  );
}
