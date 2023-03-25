import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100%;
  width: 25%;
  display: flex;
  position: relative;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 3;
  border-radius: 20px 0px 0px 20px;
  align-items: center;
  span {
    position: absolute;
    background-color: #9e9d9d6e;
    width: 10px;
    height: 100px;
    left: -25px;
    border-radius: 30px;
    &:hover {
      background-color: #d6d5d5a4;
    }
    cursor: pointer;
  }

  > div:first-child {
    width: 100%;
    height: 100%;
    padding: 30px;
    overflow: hidden;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  img {
    width: 100px;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
  }
`;
