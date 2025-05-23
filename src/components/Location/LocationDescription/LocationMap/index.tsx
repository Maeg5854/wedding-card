"use client";
import { useRef } from "react";

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (window.kakao) {
  //     const map = new window.kakao.maps.Map(mapRef.current, {
  //       center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
  //       level: 3,
  //     });
  //   }
  // }, [env.kakao]);
  return <div ref={mapRef}></div>;
}
