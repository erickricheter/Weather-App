import React from "react";
import { TbVirusSearch } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { Container } from "./NavHeader.styles";

const NavHeader = () => {
  return (
    <Container>
      <h1>
        Wheater App <TiWeatherCloudy></TiWeatherCloudy>
      </h1>
      <span
        onClick={() => {
          alert("Me clicou tá");
        }}
      >
        <TbVirusSearch />
      </span>
    </Container>
  );
};

export default NavHeader;
