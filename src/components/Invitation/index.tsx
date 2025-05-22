"use client";
import styled from "styled-components";
import Subtitle from "../common/Subtitle";
import { GroomContacts, BrideContacts } from "./Contacts";
import { BrideInviters, GroomInviters } from "./Inviters";
import { Letter } from "./Letter";

export default function Invitation() {
  return (
    <InvitationContainer>
      <Subtitle text="Invitation" />
      <Letter />
      <VerticalLine />
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <GroomInviters />
        <BrideInviters />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        <GroomContacts />
        <BrideContacts />
      </div>
    </InvitationContainer>
  );
}

const InvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid black;
  height: 47px;
`;
