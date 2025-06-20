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
      <ContactItem
        name={process.env.NEXT_PUBLIC_BRIDE_NAME || ""}
        position="신부"
        phone={process.env.NEXT_PUBLIC_BRIDE_CONTACT || ""}
      />
      {showBrideFather && (
        <ContactItem
          name={process.env.NEXT_PUBLIC_BRIDE_FATHER_NAME || ""}
          position="신부父"
          phone={process.env.NEXT_PUBLIC_BRIDE_FATHER_CONTACT || ""}
        />
      )}
      {showBrideMother && (
        <ContactItem
          name={process.env.NEXT_PUBLIC_BRIDE_MOTHER_NAME || ""}
          position="신부母"
          phone={process.env.NEXT_PUBLIC_BRIDE_MOTHER_CONTACT || ""}
        />
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
      <ContactItem
        name={process.env.NEXT_PUBLIC_GROOM_NAME || ""}
        position="신랑"
        phone={process.env.NEXT_PUBLIC_GROOM_CONTACT || ""}
      />
      {showGroomFather && (
        <ContactItem
          name={process.env.NEXT_PUBLIC_GROOM_FATHER_NAME || ""}
          position="신랑父"
          phone={process.env.NEXT_PUBLIC_GROOM_FATHER_CONTACT || ""}
        />
      )}
      {showGroomMother && (
        <ContactItem
          name={process.env.NEXT_PUBLIC_GROOM_MOTHER_NAME || ""}
          position="신랑母"
          phone={process.env.NEXT_PUBLIC_GROOM_MOTHER_CONTACT || ""}
        />
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
