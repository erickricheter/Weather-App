import React, { useState } from "react";
import { api } from "../../services/api";
// import { Container } from './styles';

export const useWeather = () => {
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const getCitiesByName = async (cityName: string) => {
    setIsLoadingCities(true);
    const responseCities = await api.get(
      `/locations/v1/cities/search?apikey=tDcrAKdsSV0NxuA70ZlnCGwAwkB5A03k&q=${encodeURIComponent(
        cityName
      )}`
    );
    setIsLoadingCities(false);
    return responseCities;
  };
  const getCityDetails = async (key: string) => {
    setIsLoadingDetails(true);
    const responseDetails = await api.get(
      `/currentconditions/v1/${key}?apikey=tDcrAKdsSV0NxuA70ZlnCGwAwkB5A03k`
    );
    setIsLoadingDetails(false);
    return responseDetails;
  };
  return { getCitiesByName, getCityDetails, isLoadingCities, isLoadingDetails };
};
