import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

interface IErrorProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

function UserInput(props: any) {
  const [enteredUserName, setEnteredUserName] = useState<string>("");
  const [enteredUserAge, setEnteredUserAge] = useState<string>("");
  const [error, setError] = useState<IErrorProps | null>();

  const addUserHandler = (event: any) => {
    event.preventDefault();

    // 입력한 유저 이름이나 나이에 아무것도 없을 경우에 대한 에러처리

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid username and age",
        message: "Please enter a valid username and age.",
      });
      return;
    }

    // 입력한 유저 나이가 0보다 작을 경우에 대한 에러처리
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age. (bigger than 0)",
      });
      return;
    }

    // 정상적인 경우의 작동
    props.getUserInput(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  // 유저 이름 작성시 상태변수에 저장
  const usernameChangeHandler = (event: any) => {
    setEnteredUserName(event.target.value);
  };

  // 유저 나이 작성시 상태변수에 저장
  const userAgeChangeHandler = (event: any) => {
    setEnteredUserAge(event.target.value);
  };

  // 에러 발생이후 다시 null 로 만드는 과정
  const errorHandler = () => {
    setError(null);
  };

  // 변화된 state 를 UI 에 반영하기 위해 state 의 값을 input 의 value 값으로 넣는다.

  return (
    <>
      {error && (
        <ErrorModal
          title={error?.title}
          message={error?.message}
          onConfirm={errorHandler}
        />
      )}
      <div style={{ width: "50%", padding: "20px", border: "1px solid black" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
          onSubmit={addUserHandler}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="text"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <button
            type="submit"
            style={{ width: "100px", padding: "10px" }}
            onClick={errorHandler}
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
}

export default UserInput;
