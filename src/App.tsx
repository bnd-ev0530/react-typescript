import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const animation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}
50%{
  transform: rotate(360deg);
  border-radius: 100px;
}
100%{
  transform: rotate(0deg);
  border-radius: 0px;
}
`;
const Emoji = styled.span`
  font-size: 30px;
  transition: all 0.2s linear;
  &:active {
    opacity: 0;
  }
`;
const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  // animation: ${animation} 1/s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😁</Emoji>
      </Box>
      <Emoji>😁</Emoji>
    </Wrapper>
  );
}

export default App;
