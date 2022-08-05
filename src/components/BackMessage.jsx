import styled from "styled-components";

const BackMessageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  .user-avi {
    width: 50px;
    height: 50px;
    background: blue;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-message {
    background: #ce230d;
    height: 40px;
    padding: 5px 10px;

    display: flex;
    align-items: center;
  }
`;

export default function BackMessage({ userInitial }) {
  return (
    <BackMessageWrapper>
      <div className="user-avi">
        <h3>{userInitial || "U"}</h3>
      </div>

      <div className="user-message">Lorem Ipsum Dolor Sit amet</div>
    </BackMessageWrapper>
  );
}
