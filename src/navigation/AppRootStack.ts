import {City} from '../cityList/City.type';

export type CityDetailProps = {
  city: City;
};

export type AppRootStackList = {
  CityList: undefined;
  CityDetail: CityDetailProps;
};
