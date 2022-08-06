import React, { useState, useEffect, useMemo } from "react";
import { useDispatch /* useSelector */ } from "react-redux";
import styled from "styled-components";
import randomstring from "randomstring";
import BackMessage from "./components/BackMessage";
import BaseModal from "./components/BaseModal";
import ForeMessage from "./components/ForeMessage";
import { registerNewUser, sendMessage } from "./actions";

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

function App() {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isShowNewUserDialog, setIsShowNewUserDialog] = useState(true);
  const [localState, setLocalState] = useState({
    newUserName: "",
    newChatMessage: "",
  });

  const handleChange = ({ target }) => {
    setLocalState((prevS) => ({
      ...prevS,
      [target.name]: target.value,
    }));
  };

  const handleEnterNewUsr = (e) => {
    e.preventDefault();

    const newUser = { name: e.target.value, id: randomstring.generate(9) };
    dispatch(registerNewUser(newUser));

    sessionStorage.setItem("@curTabUser", JSON.stringify(newUser));
    setIsShowNewUserDialog(true);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        text: localState.newChatMessage,
        from: JSON.parse(sessionStorage.getItem("@curTabUser")),
      })
    );
  };
  return (
    <>
      {" "}
      <ChatRoomWrapper>
        <BackMessage />
        <ForeMessage />
        <BottomWrapper>
          <form onSubmit={handleSendMsg}>
            <input
              type="text"
              placeholder="Start typing"
              name="newChatMessage"
              onChange={handleChange}
              value={localState.newChatMessage}
            />
            <button type="submit" disabled={!localState.newChatMessage}>
              Send
            </button>
          </form>
        </BottomWrapper>
      </ChatRoomWrapper>
      <BaseModal
        isHidden={isShowNewUserDialog}
        setIsHidden={setIsShowNewUserDialog}
      >
        <h5>Hi Welcome, please input your name,</h5>

        <form onSubmit={handleEnterNewUsr}>
          <input
            type="text"
            name="newUserName"
            placeholder="Enter your Name"
            onChange={handleChange}
            value={localState.newUserName}
          />
          <button type="submit" disabled={!localState.newUserName}>
            Submit
          </button>
        </form>
      </BaseModal>
    </>
  );
}

export default App;
