"use client";
import { styled } from "styled-components";
import Image from "next/image";

export const BrideInviters = () => {
  return (
    <Inviters
      name="김혜린"
      fatherName="김용배"
      motherName="홍수정"
      position="bride"
    />
  );
};

export const GroomInviters = () => {
  return (
    <Inviters
      name="전덕기"
      fatherName="전준호"
      motherName="이영희"
      position="groom"
    />
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
      <ParentsContainer>
        <Inviter>{fatherName}</Inviter>
        <MiddleText>{"·"}</MiddleText>
        <Inviter>{motherName}</Inviter>
        <MiddleText>{"의"}</MiddleText>
      </ParentsContainer>
      <Position>{position == "groom" ? "아들" : "딸"}</Position>
      <Inviter>{name}</Inviter>
      <Image
        src={
          position == "groom" ? "/images/metamong.png" : "/images/damgomi.png"
        }
        width={20}
        height={17}
        alt="damgomi"
        priority
        style={{ alignSelf: "end" }}
      />
    </InvitersContainer>
  );
};

const InvitersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  width: 200px;
  gap: 10px;
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
