import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useCityList} from './useCityList';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../constants/screenNames';
import {CityListStyles} from './CityListScreen.style';

const CityListScreen = () => {
  const {cityList} = useCityList();

  const navigate = useNavigation();

  const styles = CityListStyles();

  const CityItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate.navigate(ScreenNames.CITY_DETAIL, {city: item});
        }}
        style={styles.itemContainer}>
        <Text key={index} style={styles.item}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={cityList} renderItem={CityItem} />
    </View>
  );
};

export default CityListScreen;
