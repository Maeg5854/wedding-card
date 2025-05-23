"use client";
import Subtitle from "../common/Subtitle";
import LocationContacts from "./LocationContacts";
import LocationHeader from "./LocationHeader";
import LocationDescription from "./LocationDescription";

export default function Location() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Subtitle text="Location" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "26px",
          alignItems: "center",
        }}
      >
        <LocationHeader />
        <LocationContacts />
        <LocationDescription />
      </div>
    </div>
  );
}
