import { createContext } from "react";
import { CityDetailsData } from "../@types/CityDetailsData";
import React, { useState } from "react";
import { useWeather } from "../hooks/api/useWeather";
import { useNavigate } from "react-router-dom";

interface Props {
  cityDetails: CityDetailsData | undefined;
  handleGetDetails: (key: string) => Promise<void>;
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
  const handleGetDetails = async (key: string) => {
    setCityDetals((await getCityDetails(key)).data[0]);
    navigate("/weatherDetails");
  };
  return (
    <WeatherDetailContext.Provider
      value={{ cityDetails: cityDetals, handleGetDetails }}
    >
      {children}
    </WeatherDetailContext.Provider>
  );
};
