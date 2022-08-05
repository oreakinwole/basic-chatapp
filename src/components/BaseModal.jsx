import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 25;
  width: 100%;
  height: 100%;
  background-color: #7272727d;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  background: blue;
  border-radius: 15px;
  padding: 0 10px;
`;

const CloseMod = styled.p`
  float: right;
  line-height: 0;
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  margin-bottom: 0;
`;
export default function BaseModal({ children, isHidden, setIsHidden }) {
  
  return (
    <div hidden={isHidden}>
      <Wrapper>
        <ModalContent>
          <CloseMod onClick={() => setIsHidden(true)}>&times;</CloseMod>

          {children}
        </ModalContent>
      </Wrapper>
    </div>
  );
}
