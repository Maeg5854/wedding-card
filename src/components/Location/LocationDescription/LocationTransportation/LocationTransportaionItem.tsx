import styled from "styled-components";

export function LocationTransportaionItem({
  title,
  descriptions,
}: {
  title: string;
  descriptions: string[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "0 10px",
      }}
    >
      <LocationTransportaionItemHeader>{title}</LocationTransportaionItemHeader>
      {descriptions.map((item) => (
        <LocationTransportaionItemDescription
          key={item}
          style={{
            marginBottom: "0px",
          }}
        >
          {item}
        </LocationTransportaionItemDescription>
      ))}
    </div>
  );
}

const LocationTransportaionItemHeader = styled.div`
  font-family: "SeoulHangangCB";
  font-size: 16px;
  text-align: left;
`;
const LocationTransportaionItemDescription = styled.li`
  font-size: 14px;
  font-family: "SeoulHangangCL";
  white-space: pre-line;
  text-align: left;
  line-height: 1.5;
  margin: 0 0 0 5px;
  list-style-position: outside;
  list-style-type: disc;
`;
