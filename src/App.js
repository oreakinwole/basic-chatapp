import React from "react";
import styled from "styled-components";
import BackMessage from "./components/BackMessage";

const ChatRoomWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background: grey;
  margin: 0 auto;
`;

const handleSendMsg = () => {};

function App() {
  return (
    <ChatRoomWrapper>
      <BackMessage />
      <section className="fixed-bottom bg-dark">
        <form onSubmit={handleSendMsg}>
          <input type="text" placeholder="Start typing" />
          <button type="submit">Send</button>
        </form>
      </section>
    </ChatRoomWrapper>
  );
}

export default App;
