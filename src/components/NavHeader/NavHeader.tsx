import React from "react";
import { TbVirusSearch } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { Container } from "./NavHeader.styles";
import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        Wheater App <TiWeatherCloudy></TiWeatherCloudy>
      </h1>
      <span
        onClick={() => {
          navigate("/");
        }}
      >
        <TbVirusSearch />
      </span>
    </Container>
  );
};

export default NavHeader;
