"use client";
import styled from "styled-components";

const Subtitle = ({ text }: { text: string }) => {
  return <HrSect>{text}</HrSect>;
};

const HrSect = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #000000;
  font-family: "SeoulHangangCL";
  font-size: 15px;
  margin: 8px 0px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: #000000;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

export default Subtitle;
