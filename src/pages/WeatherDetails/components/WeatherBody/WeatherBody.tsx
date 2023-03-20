import React, { useContext } from "react";
import { WeatherDetailContext } from "../../../../context/WeatherDetailContext";
import { Container, Temperature, WeatherText } from "./WeatherBody.style";

// import { Container } from './styles';

const WeatherBody = () => {
  const { cityDetails } = useContext(WeatherDetailContext);
  return (
    <Container>
      <div>
        <Temperature>
          {parseInt(cityDetails?.Temperature.Metric.Value?.toString() || "0")}°
        </Temperature>
        <WeatherText>{cityDetails?.WeatherText}</WeatherText>
      </div>
    </Container>
  );
};

export default WeatherBody;
