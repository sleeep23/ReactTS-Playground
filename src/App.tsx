import React, { useState } from "react";
import "./App.css";
import UserInput from "./component/UserInput";
import UserInfo from "./component/UserInfo";
import UserDataType from "./types/UserDataType";

function App() {
  const [userList, setUserList] = useState<Array<UserDataType>>([]);
  const addUserData = (userName: string, userAge: string) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <UserInput getUserInput={addUserData} />
      {userList.map((item: UserDataType) => {
        return (
          <UserInfo
            name={item.name}
            age={item.age}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
