import React, { useState } from "react";
import styled from "styled-components";
import BackMessage from "./components/BackMessage";
import BaseModal from "./components/BaseModal";
import ForeMessage from "./components/ForeMessage";

const ChatRoomWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background: grey;
  margin: 0 auto;
  padding-top: 20px;
`;

const BottomWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  background: yellow;
  max-width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// const TextInput = styled.input`
//   hei
// `

const handleSendMsg = (e) => {
  e.preventDefault();
};
const handleEnterNewUsr = (e) => {
  e.preventDefault();
};

function App() {
  const [isShowNewUserDialog, setIsShowNewUserDialog] = useState(true);
  return (
    <>
      {" "}
      <ChatRoomWrapper>
        <BackMessage />
        <ForeMessage />
        <BottomWrapper>
          <form onSubmit={handleSendMsg}>
            <input type="text" placeholder="Start typing" />
            <button type="submit">Send</button>
          </form>
        </BottomWrapper>
      </ChatRoomWrapper>
      <BaseModal isHidden={isShowNewUserDialog} setIsHidden={setIsShowNewUserDialog}>
        <h5>Hi Welcome, please input your name,</h5>

        <form onSubmit={handleEnterNewUsr}>
          <input type="text" placeholder="Enter your Name" />
          <button type="submit">Submit</button>
        </form>
      </BaseModal>
    </>
  );
}

export default App;
