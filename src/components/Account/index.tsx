"use client";
import Subtitle from "@/components/common/Subtitle";
import { AccountItem } from "./AccountItem";
import CollapsibleList from "../common/CollapsibleList";

export default function Account({}) {
  const descriptions =
    "참석이 어려운 분들을 위해\n계좌번호를 기재하였습니다.\n너그러운 마음으로 양해 부탁드립니다.";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "59px",
        alignItems: "center",
      }}
    >
      <Subtitle text="Account" />
      <div
        style={{
          fontFamily: "SeoulHangangCL",
          fontSize: "14px",
          whiteSpace: "pre-line",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        {descriptions}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <GroomAccounts />
        <BrideAccounts />
      </div>
    </div>
  );
}

const GroomAccounts = () => {
  const accounts = [
    {
      accountBank: process.env.NEXT_PUBLIC_GROOM_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_GROOM_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_GROOM_ACCOUNT_OWNER,
      position: "신랑",
    },
    {
      accountBank: process.env.NEXT_PUBLIC_GROOM_FATHER_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_GROOM_FATHER_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_GROOM_FATHER_ACCOUNT_OWNER,
      position: "신랑父",
    },
    {
      accountBank: process.env.NEXT_PUBLIC_GROOM_MOTHER_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_GROOM_MOTHER_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_GROOM_MOTHER_ACCOUNT_OWNER,
      position: "신랑母",
    },
  ];
  return (
    <CollapsibleList title="신랑 측">
      {accounts.map((account, index) => (
        <AccountItem
          key={index}
          bank={account.accountBank ?? ""}
          accountNumber={account.accountNumber ?? ""}
          accountOwner={account.accountOwner ?? ""}
          position={account.position}
        />
      ))}
    </CollapsibleList>
  );
};

const BrideAccounts = () => {
  const accounts = [
    {
      accountBank: process.env.NEXT_PUBLIC_BRIDE_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_BRIDE_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_BRIDE_ACCOUNT_OWNER,
      position: "신부",
    },
    {
      accountBank: process.env.NEXT_PUBLIC_BRIDE_FATHER_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_BRIDE_FATHER_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_BRIDE_FATHER_ACCOUNT_OWNER,
      position: "신부父",
    },
    {
      accountBank: process.env.NEXT_PUBLIC_BRIDE_MOTHER_ACCOUNT_BANK,
      accountNumber: process.env.NEXT_PUBLIC_BRIDE_MOTHER_ACCOUNT_NUMBER,
      accountOwner: process.env.NEXT_PUBLIC_BRIDE_MOTHER_ACCOUNT_OWNER,
      position: "신부母",
    },
  ];
  return (
    <CollapsibleList title="신부 측">
      {accounts.map((account, index) => (
        <AccountItem
          key={index}
          bank={account.accountBank ?? ""}
          accountNumber={account.accountNumber ?? ""}
          accountOwner={account.accountOwner ?? ""}
          position={account.position}
        />
      ))}
    </CollapsibleList>
  );
};
