import { CityDetails } from "../../components/CityDetails/CityDetails";
import CitySelect from "../../components/CitySelect/CitySelect";
import { useWeather } from "../../hooks/api/useWeather";
import React, { useEffect, useState } from "react";
import { CityData } from "../../@types/CityData";
import { CityDetailsData } from "../../@types/CityDetailsData";
import { BodySearch, Container } from "./Search.styles";
import NavHeader from "../../components/NavHeader/NavHeader";
import CityInput from "./components/CityInput/CityInput";
// import { Container } from './styles';

const Search = () => {
  const { getCitiesByName, getCityDetails } = useWeather();
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [cityDetals, setCityDetals] = useState<CityDetailsData | undefined>();
  const handleGetDetails = async (key: string) => {
    setCityDetals((await getCityDetails(key)).data[0]);
  };
  const handleSearch = async (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (!event) {
      return;
    }
    if (event.key === "Enter") {
      const response = await getCitiesByName(event.currentTarget.value);
      console.log(response);
      setCitiesData(response.data);
    }
  };
  return (
    <Container>
      <NavHeader />
      <BodySearch>
        <CityInput handleSearch={handleSearch}></CityInput>
        <CitySelect
          handleGetDetails={handleGetDetails}
          citiesData={citiesData}
        ></CitySelect>
      </BodySearch>
      <div>FOOTER</div>
      {/* {cityDetals ? <CityDetails cityDetals={cityDetals}></CityDetails> : null} */}
    </Container>
  );
};

export default Search;
