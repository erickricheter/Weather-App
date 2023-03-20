import React from "react";
import { Container } from "./Footer.style";

// import { Container } from './styles';

const Footer = () => {
  const userDate = new Date();
  const userDateFormattedTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(userDate);
  const userDateFormattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(userDate);
  return (
    <Container>
      {userDateFormattedTime.toString() +
        " - " +
        userDateFormattedDate.toString()}
    </Container>
  );
};

export default Footer;
