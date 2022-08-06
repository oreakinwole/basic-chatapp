import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isUserDialogHidden, setIsUserDialogHidden] = useState(true);
  const [localState, setLocalState] = useState({
    newUserName: "",
    newChatMessage: "",
  });

  // console.log(typeof state);
  const handleChange = ({ target }) => {
    // console.log('TARGETT', target.name)
    setLocalState((prevS) => ({
      ...prevS,
      [target.name]: target.value,
    }));
  };

  const handleEnterNewUsr = (e) => {
    e.preventDefault();

    const newUser = {
      name: localState.newUserName,
      id: randomstring.generate(9),
    };
    dispatch(registerNewUser(newUser));

    sessionStorage.setItem("@curTabUser", JSON.stringify(newUser));
    setIsUserDialogHidden(true);
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        text: localState.newChatMessage,
        from: JSON.parse(sessionStorage.getItem("@curTabUser")),
      })
    );

    setLocalState((prevS) => ({
      ...prevS,
      newChatMessage: "",
    }));
  };

  useEffect(() => {
    const user = sessionStorage.getItem("@curTabUser");
    if (!user) setIsUserDialogHidden(false);
  }, []);

  // Rehydrate store data
  window.addEventListener("focus", function () {
    window.location.reload();
  });

  return (
    <>
      {" "}
      {isUserDialogHidden && (
        <ChatRoomWrapper>
          {state.messageStack.length > 0 &&
            state.messageStack.map((item) =>
              JSON.parse(sessionStorage.getItem("@curTabUser")).id ===
              item.from.id ? (
                <ForeMessage
                  item={item}
                  key={item.from.id + randomstring.generate(6)}
                />
              ) : (
                <BackMessage
                  item={item}
                  key={item.from.id + randomstring.generate(6)}
                />
              )
            )}
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
      )}
      <BaseModal
        isHidden={isUserDialogHidden}
        setIsHidden={setIsUserDialogHidden}
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
