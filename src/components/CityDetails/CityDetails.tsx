import React from "react";
import { CityDetailsData } from "../../@types/CityDetailsData";
interface Props {
  cityDetals: CityDetailsData;
}
// import { Container } from './styles';

export const CityDetails = ({ cityDetals }: Props) => {
  return <p>{cityDetals?.IsDayTime ? "é dia" : "Num é"}</p>;
};
