import React, { useContext, useState } from "react";
import { Container, NavBar } from "./LateralMenu.style";
import { motion } from "framer-motion";
import { WeatherDetailContext } from "../../context/WeatherDetailContext";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const LateralMenu = () => {
  const data = [
    { name: "Page A", uv: 4030, pv: 21400, amt: 24200 },
    { name: "Page A", uv: 4020, pv: 24030, amt: 2400 },
    { name: "Page A", uv: 4200, pv: 24010, amt: 24300 },
  ];

  const { cityDetails, cityData } = useContext(WeatherDetailContext);
  const variants = {
    open: { width: "25%" },
    close: { width: 0 },
  };
  const paddingVariants = {
    open: { padding: "30px", opacity: "1" },
    close: { padding: "0px", opacity: "0" },
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container
      animate={isOpen ? "open" : "close"}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <motion.div
        animate={isOpen ? "open" : "close"}
        variants={paddingVariants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
        }}
      >
        <NavBar>
          <p>
            {cityData?.LocalizedName}
            {cityData?.Country.LocalizedName}
          </p>
          <p></p>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${cityDetails?.WeatherIcon}-s.png`}
          ></img>
        </NavBar>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <XAxis dataKey="name" />
        </LineChart>
      </motion.div>
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></span>
    </Container>
  );
};

export default LateralMenu;
