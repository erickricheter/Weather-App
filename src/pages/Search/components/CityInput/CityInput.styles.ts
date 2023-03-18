import { DefaultInput } from "./../../../../styles/global";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  input {
    ${DefaultInput}
    transition: 25s ease all;
    position: relative;
    border: none;
    border-bottom: 1px solid #ffff;
    background-color: transparent;
    text-align: center;
    font-size: 40px;
    color: #ffff;
    line-height: 70px;
    width: 100%;
    margin-bottom: 10px;
    caret-color: transparent;
    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: -50px;
      background-color: transparent;
      color: #ffffff46;
    }
    &:focus,
    &:not(:placeholder-shown) {
      caret-color: #ffffff54;
    }
  }

  label {
    top: 0;
    display: flex;
    width: 100%;
    position: absolute;
    pointer-events: none;
    transition: 0.3s ease all;
    font-size: 15px;
    color: white;
    justify-content: center;
    div {
      position: relative;
      span {
        font-size: 50px;
        font-weight: bold;
      }
    }
  }
`;
