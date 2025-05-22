"use client";
import { Collapse } from "@kunukn/react-collapse";
import { styled } from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const CollapsibleList = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CollapsibleHeaders
        style={{
          borderRadius: isOpen ? "15px  15px 0 0" : "15px 15px 15px 15px",
        }}
      >
        <span>{title}</span>
        <CollapsibleButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
        </CollapsibleButton>
      </CollapsibleHeaders>
      <Collapse
        isOpen={isOpen}
        transition="height 400ms cubic-bezier(0.0, 0.0, 0.38, 1.0)"
      >
        <CollapsibleContent>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <div key={index}>
                  {child}
                  {index !== children.length - 1 && child && <HorizontalLine />}
                </div>
              ))
            : children}
        </CollapsibleContent>
      </Collapse>
    </div>
  );
};

const CollapsibleHeaders = styled.div`
  background-color: #f8f8f8;
  width: 267px;
  height: 42px;
  font-family: "SeoulNamsanCB";
  font-size: 14px;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  align-content: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  transition: border-radius 200ms cubic-bezier(0, 0, 0.68, 1);
`;

const CollapsibleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-content: center;
`;

const CollapsibleContent = styled.div`
  background-color: #ffffff;
  width: 267px;
  padding: 16px 16px;
  border: 1px solid #d9d9d9;
  border-top: none;
  border-radius: 0 0 15px 15px;
`;

const HorizontalLine = styled.hr`
  border-top: 1px solid #e3e3e3;
  border-bottom: none;
  margin: 13px 0;
`;

export default CollapsibleList;
