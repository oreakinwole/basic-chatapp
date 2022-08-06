import styled from "styled-components";

const ForeMessageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  /* background-color: black; */

  .user-avi {
    width: 50px;
    height: 50px;
    background: #fffb00;
    border-radius: 50%;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-message {
    background: #0dceae;
    height: 40px;
    padding: 5px 10px;

    display: flex;
    align-items: center;
  }
`;

export default function ForeMessage({item}) {
  return (
    <ForeMessageWrapper>
      <div className="user-message">{item.text}</div>

      <div className="user-avi">
        <h3>{item.from.name[0]}</h3>
      </div>
    </ForeMessageWrapper>
  );
}
