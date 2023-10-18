import {StyleSheet} from 'react-native';

export const CityListStyles = () =>
  StyleSheet.create({
    itemContainer: {
      padding: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#4286f4',
      margin: 12,
      backgroundColor: '#C2E2FF',
    },
    item: {color: '#333333', fontWeight: '500'},
    container: {backgroundColor: '#E6F7FF', flex: 1},
  });
