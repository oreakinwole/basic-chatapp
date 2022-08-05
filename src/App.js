import React from "react";
import styled from "styled-components";
import BackMessage from "./components/BackMessage";
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

const handleSendMsg = () => {};

function App() {
  return (
    <ChatRoomWrapper>
      <BackMessage />
      <ForeMessage/>
      <BottomWrapper>
        <form onSubmit={handleSendMsg}>
          <input type="text" placeholder="Start typing" />
          <button type="submit">Send</button>
        </form>
      </BottomWrapper>
    </ChatRoomWrapper>
  );
}

export default App;
