import {
  LocationMapDirectIcon,
  LocationMapDirectDvcd,
} from "./LocationMapDirectIcon";

export default function LocationMapDirect() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LocationMapDirectIcon map={LocationMapDirectDvcd.KAKAO} />
      <LocationMapDirectIcon map={LocationMapDirectDvcd.NAVER} />
      <LocationMapDirectIcon map={LocationMapDirectDvcd.T} />
    </div>
  );
}
