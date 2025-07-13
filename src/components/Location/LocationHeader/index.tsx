import styled from "styled-components";

export default function LocationHeader() {
  const locationName = "아펠가모 공덕 마리에홀";
  const locationAddress = "서울 마포구 마포대로 92, 효성해링턴스퀘어 B동 7층";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <LocationTitle>{locationName}</LocationTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <LocationAddress>{locationAddress}</LocationAddress>
        <LocationPhone>02-2197-0230</LocationPhone>
      </div>
    </div>
  );
}

const LocationTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: SeoulHangangCB;
`;

const LocationAddress = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: SeoulHangangCL;
`;

const LocationPhone = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: SeoulHangangCL;
`;
