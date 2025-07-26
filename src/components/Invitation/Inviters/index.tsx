"use client";
import { styled } from "styled-components";
import Image from "next/image";

export const BrideInviters = () => {
  return (
    <Inviters
      name={process.env.NEXT_PUBLIC_BRIDE_NAME || ""}
      fatherName={process.env.NEXT_PUBLIC_BRIDE_FATHER_NAME || ""}
      motherName={process.env.NEXT_PUBLIC_BRIDE_MOTHER_NAME || ""}
      position="bride"
    />
  );
};

export const GroomInviters = () => {
  return (
    <Inviters
      name={process.env.NEXT_PUBLIC_GROOM_NAME || ""}
      fatherName={process.env.NEXT_PUBLIC_GROOM_FATHER_NAME || ""}
      motherName={process.env.NEXT_PUBLIC_GROOM_MOTHER_NAME || ""}
      position="groom"
    />
  );
};

export const InvitersTable = () => {
  return (
    <InvitersContainer>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left", verticalAlign: "middle" }}>
              <ParentsContainer>
                <Inviter>
                  {process.env.NEXT_PUBLIC_GROOM_FATHER_NAME || ""}
                </Inviter>
                <MiddleText>{"·"}</MiddleText>
                <Inviter>
                  {process.env.NEXT_PUBLIC_GROOM_MOTHER_NAME || ""}
                </Inviter>
              </ParentsContainer>
            </td>
            <td
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                width: "10px",
              }}
            >
              <MiddleText>{"의"}</MiddleText>
            </td>
            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
              <Position>아들</Position>
            </td>
            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
              <Inviter>{process.env.NEXT_PUBLIC_GROOM_NAME || ""}</Inviter>
            </td>
            <td style={{ textAlign: "right", verticalAlign: "middle" }}>
              <Image
                src="/images/metamong.png"
                width={20}
                height={17}
                alt="metamong"
                priority
              />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left", verticalAlign: "middle" }}>
              <ParentsContainer>
                <Inviter>
                  {process.env.NEXT_PUBLIC_BRIDE_FATHER_NAME || ""}
                </Inviter>
                <MiddleText>{"·"}</MiddleText>
                <Inviter>
                  {process.env.NEXT_PUBLIC_BRIDE_MOTHER_NAME || ""}
                </Inviter>
              </ParentsContainer>
            </td>
            <td>
              <MiddleText>{"의"}</MiddleText>
            </td>
            <td
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                width: "10px",
              }}
            ></td>
            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
              <Position>딸</Position>
            </td>
            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
              <Inviter>{process.env.NEXT_PUBLIC_BRIDE_NAME || ""}</Inviter>
            </td>
            <td style={{ textAlign: "right", verticalAlign: "middle" }}>
              <Image
                src="/images/damgomi.png"
                width={20}
                height={17}
                alt="damgomi"
                priority
              />
            </td>
          </tr>
        </tbody>
      </table>
    </InvitersContainer>
  );
};

const Inviters = ({
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
    <InvitersContainer>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left", verticalAlign: "middle" }}>
              <ParentsContainer>
                <Inviter>{fatherName}</Inviter>
                <MiddleText>{"·"}</MiddleText>
                <Inviter>{motherName}</Inviter>
                <MiddleText>{"의"}</MiddleText>
              </ParentsContainer>
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
                  position == "groom"
                    ? "/images/metamong.png"
                    : "/images/damgomi.png"
                }
                width={20}
                height={17}
                alt="damgomi"
                priority
              />
            </td>
          </tr>
        </tbody>
      </table>
    </InvitersContainer>
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

const ParentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-family: "SeoulHangangCL";
  color: #000000;
  text-align: center;
`;

const MiddleText = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  color: #000000;
  align-items: center;
  height: 17px;
`;
