import React, { useState } from "react";
import Circle from "./Circle";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    // const value = event.currentTarget.value 와 동일한 코드
    // 하지만, 여러 개의 변수를 받을 땐 위의 형태가 유리함. 아래는 예시 코드
    // const { currentTarget: {value, id, tagName, width} } = event -> value, id, tagName, width 라는 변수 생성 및 초기화
    // const {value, id, tagName, width} = event.currentTarget -> 위와 같은 의미의 코드에 해당한다.
    setValue(value);
  };
  return (
    <>
      <Circle bgColors="tomato" borderColor="black" />
      <Circle bgColors="teal" text="Not default" />
      <form>
        <input
          value={value}
          type="text"
          placeholder="user-name"
          onChange={onChange}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default App;
