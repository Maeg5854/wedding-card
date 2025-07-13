"use client";
import { styled } from "styled-components";

export function NoticeItem({
  noticeHeaderText,
  noticeContentText,
}: {
  noticeHeaderText: string;
  noticeContentText: string | string[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <NoticeItemHeader>{noticeHeaderText}</NoticeItemHeader>
      <div>
        {Array.isArray(noticeContentText) ? (
          noticeContentText.map((text, idx) => (
            <NoticeItemList key={idx}>{text}</NoticeItemList>
          ))
        ) : (
          <NoticeItemContent>{noticeContentText}</NoticeItemContent>
        )}
      </div>
    </div>
  );
}

const NoticeItemHeader = styled.div`
  font-family: "SeoulHangangCB";
  font-size: 16px;
  text-align: center;
`;

const NoticeItemContent = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  text-align: center;
  white-space: pre-line;
  line-height: 1.5;
`;

const NoticeItemList = styled.div`
  font-size: 14px;
  font-family: "SeoulHangangCL";
  white-space: pre-line;
  text-align: center;
  line-height: 1.5;
  padding: 0 10px;
  margin: 0 0 0 5px;
`;
