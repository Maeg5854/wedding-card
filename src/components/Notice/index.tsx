import Subtitle from "../common/Subtitle";
import { NoticeItem } from "./NoticeItem/NoticeItem";

export const Notice = () => {
  const notices = [
    {
      header: "화환 안내",
      content: "화환은 정중히 사양하겠습니다.\n마음만으로 감사합니다.",
    },
    {
      header: "식사를 못하실 경우",
      content: "~~에 식사권을 제출하시면 답례품으로 교환해드립니다.",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
