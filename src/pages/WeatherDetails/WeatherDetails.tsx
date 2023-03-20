import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import NavHeader from "../../components/NavHeader/NavHeader";
import { WeatherDetailContext } from "../../context/WeatherDetailContext";
import WeatherBody from "./components/WeatherBody/WeatherBody";
import { Container } from "./WeatherDetails.style";

const WeatherDetails = () => {
  const { cityDetails } = useContext(WeatherDetailContext);
  const getVideoUrl = () => {
    const hours = cityDetails?.LocalObservationDateTime
      ? parseInt(cityDetails.LocalObservationDateTime.slice(11, 13), 10)
      : 0;
    if (hours > 5 && hours <= 7) {
      return "/assets/video/morning.mp4";
    } else if (hours > 7 && hours <= 17) {
      return "/assets/video/day.mp4";
    } else if (hours > 17 && hours <= 19) {
      return "/assets/video/sunset.mp4";
    } else return "/assets/video/night.mp4";
  };
  return (
    <Container>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          filter: "brightness(51%)",
        }}
      >
        <source src={getVideoUrl()} type="video/mp4"></source>
      </video>
      <NavHeader></NavHeader>
      <WeatherBody></WeatherBody>
      <Footer></Footer>
    </Container>
  );
};

export default WeatherDetails;
