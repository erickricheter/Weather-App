import React from "react";
import { Container } from "./CityInput.styles";
interface Props {
  handleSearch: (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => Promise<void>;
}
// import { Container } from './styles';

const CityInput = ({ handleSearch }: Props) => {
  return (
    <Container>
      <input type={"text"} onKeyDown={handleSearch}></input>
    </Container>
  );
};

export default CityInput;
