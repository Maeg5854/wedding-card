import dayjs from "dayjs";
import styled from "styled-components";

export default function Summary() {
  const location = "아펠가모 공덕 마리에홀";
  const datetime = dayjs("2025-08-23T16:30");
  return (
    <SummaryContainer>
      <SummaryContent>{location}</SummaryContent>
      <SummaryContent>{datetime.format("YYYY.M.DD h:mm A")}</SummaryContent>
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SummaryContent = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 16px;
`;
