import styled from "styled-components";
import { useState } from "react";

interface CircleProps {
  bgColors: string;
  borderColor?: string; // optional input 을 받는 방법 제시
  text?: string;
}

const Container = styled.div<CircleProps>`
  // div 태그에도 interface 적용해서 함수 사용이 가능해진다.
  color: ${(props) => props.theme.textColor};
  margin: 20px;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 50px;
  border: 1px solid ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Circle({ bgColors, borderColor, text = "default" }: CircleProps) {
  const [counter, setCounter] = useState(1);
  return (
    <Container bgColors={bgColors} borderColor={borderColor ?? "white"}>
      {text}
    </Container> // default 값 생성 예시
  );
}

interface Object {
  name: string;
}

const sayHello = (object: Object) => `Hello ${object.name}!`;

sayHello({ name: "Bob" });

export default Circle;
