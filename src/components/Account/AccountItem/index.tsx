"use client";
import { styled } from "styled-components";
import { RiFileCopyLine } from "react-icons/ri";
import { toast } from "react-toastify";

export const AccountItem = ({
  bank,
  accountNumber,
  accountOwner,
  position,
}: {
  bank: string;
  accountNumber: string;
  accountOwner: string;
  position: string;
}) => {
  return (
    <AccountItemContainer>
      <AccountOwnerContainer>
        <div style={{ fontFamily: "SeoulHangangCB" }}>{position}</div>
        <div>{accountOwner}</div>
      </AccountOwnerContainer>

      <AccountNumber>
        <div>{bank}</div>
        <div>{accountNumber}</div>
        <CopyButton
          onClick={() => {
            navigator.clipboard.writeText(`${bank} ${accountNumber} `);
            toast.success("복사되었습니다.");
          }}
        >
          <RiFileCopyLine size={13} color="black" />
        </CopyButton>
      </AccountNumber>
    </AccountItemContainer>
  );
};

const AccountItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SeoulHangangCL";
  font-size: 14px;
`;

const AccountOwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const AccountNumber = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CopyButton = styled.button`
  border: none;
  background-color: transparent;
`;
