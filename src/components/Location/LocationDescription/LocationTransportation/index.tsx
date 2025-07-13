import { LocationTransportaionItem } from "./LocationTransportaionItem";
import { HorizontalLine } from "@/components/common/HorizontalLine";

export function LocationTransportation() {
  const transportations = [
    {
      title: "자가용 안내",
      description: [
        "효성해링턴스퀘어 B동 주차장으로 오시면, 아펠가모 공덕 주차 요원의 안내에 따라 주차하실 수 있습니다.",
        "주차장 만차 시, 외부 주차장 (도보 5분)으로 안내 예정입니다.",
        "피로연장에서 <b>2시간 무료 주차 주차권</b>을 받아가실 수 있습니다.",
      ],
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
