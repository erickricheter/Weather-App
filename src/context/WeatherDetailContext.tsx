import { createContext } from "react";
import { CityDetailsData } from "../@types/CityDetailsData";
import React, { useState } from "react";
import { useWeather } from "../hooks/api/useWeather";
import { useNavigate } from "react-router-dom";
import { CityData } from "../@types/CityData";

interface Props {
  cityDetails: CityDetailsData | undefined;
  handleGetDetails: (key: string) => Promise<void>;
  cityData: CityData | undefined;
  setCityData: React.Dispatch<React.SetStateAction<CityData | undefined>>;
}
export const WeatherDetailContext = createContext<Props>({} as Props);
export const WeatherDetailProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const { getCityDetails } = useWeather();
  const [cityDetals, setCityDetals] = useState<CityDetailsData | undefined>();
  const [cityData, setCityData] = useState<CityData | undefined>();
  const handleGetDetails = async (key: string) => {
    setCityDetals((await getCityDetails(key)).data[0]);
    navigate("/weatherDetails");
  };
  return (
    <WeatherDetailContext.Provider
      value={{
        cityDetails: cityDetals,
        cityData: cityData,
        handleGetDetails,
        setCityData: setCityData,
      }}
    >
      {children}
    </WeatherDetailContext.Provider>
  );
};
