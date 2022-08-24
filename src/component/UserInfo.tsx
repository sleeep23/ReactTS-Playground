import React from "react";
import UserDataType from "../types/UserDataType";

function UserInfo({ name, age }: UserDataType) {
  return (
    <div
      style={{
        width: "500px",
        height: "fit-content",
        marginTop: "20px",
        border: "1px solid black",
      }}
    >
      <div style={{ padding: "10px" }}>
        {name}
        {` (${age} years old)`}
      </div>
    </div>
  );
}

export default UserInfo;
