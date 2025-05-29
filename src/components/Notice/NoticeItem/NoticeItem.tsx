"use client";
import { styled } from "styled-components";

export function NoticeItem({
  noticeHeaderText,
  noticeContentText,
}: {
  noticeHeaderText: string;
  noticeContentText: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <NoticeItemHeader>{noticeHeaderText}</NoticeItemHeader>
      <NoticeItemContent>{noticeContentText}</NoticeItemContent>
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
`;
