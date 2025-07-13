import Subtitle from "../common/Subtitle";
import { NoticeItem } from "./NoticeItem/NoticeItem";

export const Notice = () => {
  const notices = [
    {
      header: "화환 안내",
      content: [
        "예식장 내 규정에 따라\n축하화환 반입이 어려운 점 양해 부탁드립니다.\n소중한 마음만 감사히 받겠습니다.",
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
