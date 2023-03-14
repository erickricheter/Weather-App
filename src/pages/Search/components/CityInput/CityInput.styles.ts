import { DefaultInput } from "./../../../../styles/global";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  &:before {
    position: absolute;
    color: white;
    text-align: center;
    font-size: 80px;
    width: 100%;
    height: 100%;
    content: "Where are you?";
  }
  input {
    ${DefaultInput}
    position: relative;
    border: none;
    border-bottom: 1px solid #ffff;
    background-color: transparent;
    text-align: center;
    color: #ffff;
    width: 100%;
    line-height: 110px;
    margin-bottom: 10px;
  }
`;
