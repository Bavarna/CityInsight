import {useEffect, useState} from 'react';
import {City} from './City.type';
import cities from './City.json';

export const useCityList = () => {
  const [cityList, setCities] = useState<City[]>([]);

  useEffect(() => {
    setCities(cities);
  }, []);

  return {
    cityList,
  };
};
