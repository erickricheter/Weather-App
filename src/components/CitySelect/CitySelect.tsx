import React from "react";
import { CityData } from "../../@types/CityData";

interface Props {
  handleGetDetails: (key: string) => Promise<void>;
  citiesData: CityData[];
}

const CitySelect = ({ handleGetDetails, citiesData }: Props) => {
  return (
    <select
      onChange={(event) => {
        handleGetDetails(event.currentTarget.value);
      }}
      defaultValue="1"
    >
      <option value="1" disabled defaultChecked>
        Selecione uma cidade
      </option>
      {citiesData.map((city) => {
        console.log(citiesData);
        return (
          <option key={city.Key} value={city.Key}>
            {city.AdministrativeArea.EnglishName + " " + city.LocalizedName}
          </option>
        );
      })}
    </select>
  );
};

export default CitySelect;
