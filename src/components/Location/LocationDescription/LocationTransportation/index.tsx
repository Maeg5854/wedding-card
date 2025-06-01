import { LocationTransportaionItem } from "./LocationTransportaionItem";
import { HorizontalLine } from "@/components/common/HorizontalLine";

export function LocationTransportation() {
  const transportations = [
    {
      title: "자가용 안내",
      description: ["효성헤링턴 민영 주차장에 주차", "무료 주차"],
    },
    {
      title: "버스 안내",
      description: [
        "간선 160, 260, 600 / 지선 7013A, 7013B, 7611 / 일반 1002 / 공항 6015\n→ 공덕역(14003, 14004) 하차",
        "마을 마포01, 마포02, 마포10\n→ 공덕역10번출구(14617, 14618) 하차",
      ],
    },
    {
      title: "지하철 안내",
      description: [
        "공덕역 10번 출구 > 유턴 후 효성해링턴 스퀘어 B동 7층 (도보 30초)",
      ],
    },
  ];
  return (
    <div>
      {transportations.map((transportation, index) => (
        <div key={index}>
          <LocationTransportaionItem
            title={transportation.title}
            descriptions={transportation.description}
          />
          {index !== transportations.length - 1 && <HorizontalLine />}
        </div>
      ))}
    </div>
  );
}
