import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const MapButton = styled.button<{
  zoomDirection: "increase" | "decrease";
}>`
  position: absolute;
  z-index: 1;
  width: 30px;
  height: 30px;
  background-color: #55535373;

  &:focus {
  }
  ${(props) =>
    props.zoomDirection === "increase"
      ? css`
          left: 95%;
          top: 50%;
        `
      : css`
          left: 95%;
          top: 60%;
        `}
`;
