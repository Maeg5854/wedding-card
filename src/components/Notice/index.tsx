import Subtitle from "../common/Subtitle";
import { NoticeItem } from "./NoticeItem/NoticeItem";

export const Notice = () => {
  const notices = [
    {
      header: "주차 안내",
      content: [
        "효성해링턴스퀘어 B동 주차장으로 오시면, 아펠가모 공덕 주차 요원의 안내에 따라 주차하실 수 있습니다.",
        "주차장 만차 시, 외부 주차장 (도보 5분)으로 안내 예정입니다.",
        "피로연장에서 2시간 무료 주차 주차권을 받아가실 수 있습니다.",
      ],
    },
    {
      header: "화환 안내",
      content: [
        "예식장 내 규정에 따라 축하화환 반입이 어려운 점 너그러이 양해 부탁드립니다. 소중한 마음만 감사히 받겠습니다.",
      ],
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",

        gap: "59px",
        alignItems: "center",
      }}
    >
      <Subtitle text="Notice" />
      {notices.map((notice, index) => (
        <NoticeItem
          key={index}
          noticeHeaderText={notice.header}
          noticeContentText={notice.content}
        />
      ))}
    </div>
  );
};
