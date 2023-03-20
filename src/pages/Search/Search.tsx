import { useWeather } from "../../hooks/api/useWeather";
import React, { useEffect, useRef, useState, useContext } from "react";
import { CityData } from "../../@types/CityData";
import { BodySearch, Container } from "./Search.styles";
import NavHeader from "../../components/NavHeader/NavHeader";
import CityInput from "./components/CityInput/CityInput";
import CityMapSelect from "./components/CityMapSelect/CityMapSelect";
import autoAnimate from "@formkit/auto-animate";
import Footer from "../../components/Footer/Footer";
import { WeatherDetailContext } from "../../context/WeatherDetailContext";

const Search = () => {
  const parent = useRef(null);
  const { handleGetDetails } = useContext(WeatherDetailContext);
  const { getCitiesByName, getCityDetails, isLoadingCities, isLoadingDetails } =
    useWeather();
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const handleSearch = async (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (!event) {
      return;
    }
    if (event.key === "Enter") {
      const response = await getCitiesByName(event.currentTarget.value);
      console.log(response);
      setCitiesData(response.data || []);
    }
  };
  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 350 });
  }, [parent]);
  return (
    <Container>
      <NavHeader />
      <BodySearch ref={parent}>
        <CityInput handleSearch={handleSearch}></CityInput>
        {citiesData.length ? (
          <CityMapSelect
            cities={citiesData}
            handleGetDetails={handleGetDetails}
          ></CityMapSelect>
        ) : null}
      </BodySearch>
      <Footer></Footer>
    </Container>
  );
};

export default Search;
