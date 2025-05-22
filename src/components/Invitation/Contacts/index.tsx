import CollapsibleList from "@/components/common/CollapsibleList";
import { ContactItem } from "./ContactItem";

interface BrideContactsProps {
  showBrideMother?: boolean;
  showBrideFather?: boolean;
}

export const BrideContacts = ({
  showBrideMother = true,
  showBrideFather = true,
}: BrideContactsProps) => {
  return (
    <Contacts title="신부 측 연락하기">
      <ContactItem name="김혜린" position="신부" phone="010-1234-5678" />
      {showBrideFather && (
        <ContactItem name="김용배" position="신부父" phone="010-1234-5678" />
      )}
      {showBrideMother && (
        <ContactItem name="홍수정" position="신부母" phone="010-1234-5678" />
      )}
    </Contacts>
  );
};

interface GroomContactsProps {
  showGroomMother?: boolean;
  showGroomFather?: boolean;
}

export const GroomContacts = ({
  showGroomMother = true,
  showGroomFather = true,
}: GroomContactsProps) => {
  return (
    <Contacts title="신랑 측 연락하기">
      <ContactItem name="전현준" position="신랑" phone="010-1234-5678" />
      {showGroomFather && (
        <ContactItem name="전덕기" position="신랑父" phone="010-1234-5678" />
      )}
      {showGroomMother && (
        <ContactItem name="이영희" position="신랑母" phone="010-1234-5678" />
      )}
    </Contacts>
  );
};

const Contacts = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return <CollapsibleList title={title}>{children}</CollapsibleList>;
};
