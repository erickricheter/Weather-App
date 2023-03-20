import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  padding: 2em 3.4em;
  height: 100%;
  z-index: 2;
  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 6.7em;
  }
`;

export const Temperature = styled.h1`
  font-size: 14rem;
  color: white;
`;

export const WeatherText = styled.p`
  color: white;
  font-size: 3rem;
`;
