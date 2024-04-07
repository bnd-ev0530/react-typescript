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
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  interface RouteState {
    name: string;
  }
  interface InfoData {
    name: string;
  }
  interface PriceData {
    name: string;
  }
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId.slice(1)}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId.slice(1)}`)
      ).json();
      console.log(coinId.slice(1));

      setInfo(infoData);
      setPrice(priceData);
      console.log("infoData : " + JSON.stringify(infoData));
      console.log("priceData : " + JSON.stringify(priceData));
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || <Loader>Loading....💦</Loader>}</Title>
      </Header>

      {loading ? <Loader>Loading....💦</Loader> : <span>{info.hello}</span>}
    </Container>
  );
}

export default Coin;
