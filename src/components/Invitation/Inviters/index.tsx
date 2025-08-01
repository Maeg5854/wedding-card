"use client";
import { styled } from "styled-components";
import Image from "next/image";

export const InvitersTable = () => {
  return (
    <InvitersContainer>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <InviterRow
            name={process.env.NEXT_PUBLIC_GROOM_NAME || ""}
            fatherName={process.env.NEXT_PUBLIC_GROOM_FATHER_NAME || ""}
            motherName={process.env.NEXT_PUBLIC_GROOM_MOTHER_NAME || ""}
            position="groom"
          />
          <InviterRow
            name={process.env.NEXT_PUBLIC_BRIDE_NAME || ""}
            fatherName={process.env.NEXT_PUBLIC_BRIDE_FATHER_NAME || ""}
            motherName={process.env.NEXT_PUBLIC_BRIDE_MOTHER_NAME || ""}
            position="bride"
          />
        </tbody>
      </table>
    </InvitersContainer>
  );
};

const InviterRow = ({
  name,
  fatherName,
  motherName,
  position,
}: {
  name: string;
  fatherName: string;
  motherName: string;
  position: string;
}) => {
  return (
    <tr>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Inviter>{fatherName}</Inviter>
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <MiddleText>{"·"}</MiddleText>
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Inviter>{motherName}</Inviter>
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <MiddleText>{"의"}</MiddleText>
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Position>{position == "groom" ? "아들" : "딸"}</Position>
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        <Inviter>{name}</Inviter>
      </td>
      <td style={{ textAlign: "right", verticalAlign: "middle" }}>
        <Image
          src={
            position == "groom" ? "/images/metamong.png" : "/images/damgomi.png"
          }
          width={20}
          height={17}
          alt="damgomi"
          priority
        />
      </td>
    </tr>
  );
};

const InvitersContainer = styled.div`
  color: #000000;
  width: 200px;
`;

const Inviter = styled.div`
  font-family: "SeoulHangangCB";
  font-size: 14px;
  align-items: center;
  color: #000000;
`;

const Position = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  height: 17px;
  align-items: center;
  color: #000000;
`;

const MiddleText = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  color: #000000;
  align-items: center;
  height: 17px;
`;
