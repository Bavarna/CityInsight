import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppRootStackList} from '../navigation/AppRootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CityDetailStyle} from './CityDetailScreen.style';

type Props = NativeStackScreenProps<AppRootStackList, 'CityDetail'>;

const CityDetailsScreen = ({navigation, route}: Props) => {
  const {city} = route.params;
  const styles = CityDetailStyle();

  useEffect(() => {
    navigation.setOptions({
      title: city.name,
    });
  }, [navigation, city]);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{city.description}</Text>
    </View>
  );
};

export default CityDetailsScreen;
