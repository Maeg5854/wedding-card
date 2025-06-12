import Subtitle from "../common/Subtitle";
import PhotoAlbum from "./PhotoAlbum";

export default function Gallary() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "59px",
        alignItems: "center",
      }}
    >
      <Subtitle text="Gallary" />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <PhotoAlbum />
      </div>
    </div>
  );
}
