import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface RouteParams {
  coinId: string;
}
const Header = styled.header`
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 0 20px;
`;
const Loader = styled.span`
  font-size: 16px;
  text-align: center;
  display: block;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  interface RouteState {
    name: string;
  }
  return (
    <Container>
      <Header>
        <Title>{state?.name || <Loader>Loading....💦</Loader>}</Title>
      </Header>

      {loading ? <Loader>Loading....💦</Loader> : null}
    </Container>
  );
}

export default Coin;
