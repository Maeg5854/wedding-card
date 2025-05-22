"use client";
import styled from "styled-components";

export const Letter = () => {
  return (
    <div>
      <Saying>{`"그러므로 하나님이 짝지어 주신 것을
사람이 나누지 못할지니라 하시더라"(막10:9) `}</Saying>
      <br />
      <LetterContents>
        {`하나님 안에서 하나되는 첫 시작의 날,
귀한 걸음으로 축복해주시면 더 없는 기쁨으로 간직하겠습니다.`}
      </LetterContents>
    </div>
  );
};

const LetterContents = styled.div`
  font-family: "SeoulHangangCL";
  font-size: 14px;
  text-align: center;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const Saying = styled.div`
  font-family: "SeoulHangangCB";
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  white-space: pre-wrap;
`;
