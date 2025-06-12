"use client";
import { IoCall } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import styled from "styled-components";

export const ContactItem = ({
  name,
  position,
  phone,
}: {
  name: string;
  position: string;
  phone: string;
}) => {
  return (
    <ContactItemContainer>
      <ContactMeta>
        <Position>{position}</Position>
        <Name>{name}</Name>
      </ContactMeta>
      <ContactList>
        <CallButton onClick={() => window.open(`tel:${phone}`)}>
          <IoCall size={20} color="black" />
        </CallButton>
        <MessageButton onClick={() => window.open(`sms:${phone}`)}>
          <TbMessage2 size={20} color="black" />
        </MessageButton>
      </ContactList>
    </ContactItemContainer>
  );
};

const ContactItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const Position = styled.div`
  font-family: "SeoulHangangCB";
  font-size: 14px;
  align-items: center;
`;

const Name = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  align-items: center;
`;

const ContactMeta = styled.div`
  display: flex;
  width: 72px;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const CallButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
