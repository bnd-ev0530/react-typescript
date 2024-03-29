import styled from "styled-components";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
export default Circle;
interface PlayerShape {
  name: string;
  age: string;
}
const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name}  ${playerObj.age};`;

sayHello({ name: "Sungho", age: "22" });
sayHello({ name: "Taesan", age: "21" });
