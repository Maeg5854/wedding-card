"use client";
import Subtitle from "../common/Subtitle";
import Calendar from "./Calendar";

export default function Date() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        textAlign: "center",
      }}
    >
      <Subtitle text="Date" />
      <Calendar />
    </div>
  );
}
