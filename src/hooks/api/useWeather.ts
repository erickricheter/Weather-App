import React from "react";
import { api } from "../../services/api";
// import { Container } from './styles';

export const useWeather = () => {
  const getCitiesByName = async (cityName: string) => {
    return api.get(
      `/locations/v1/cities/search?apikey=tDcrAKdsSV0NxuA70ZlnCGwAwkB5A03k&q=${encodeURIComponent(
        cityName
      )}`
    );
  };
  const getCityDetails = async (key: string) => {
    return api.get(
      `/currentconditions/v1/${key}?apikey=tDcrAKdsSV0NxuA70ZlnCGwAwkB5A03k`
    );
  };
  return { getCitiesByName, getCityDetails };
};
