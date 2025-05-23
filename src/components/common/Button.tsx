import styled from "styled-components";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
}): React.ReactNode {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 20px;
  background-color: #f8f8f8;
  border: 1px solid #e3e3e3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  padding: 10px 20px;
  font-family: SeoulNamsanCB;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  &:hover {
    background-color: #e3e3e3;
  }
`;
