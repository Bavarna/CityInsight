import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRootStackList} from './AppRootStack';
import {ScreenNames} from '../constants/screenNames';
import CityListScreen from '../cityList/CityListScreen';
import CityDetailsScreen from '../cityDetails/CityDetailsScreen';

const AppNavigationStack = createNativeStackNavigator<AppRootStackList>();

const AppNavigation = () => {
  return (
    <AppNavigationStack.Navigator
      initialRouteName={ScreenNames.CITY_LIST}
      screenOptions={{animation: 'slide_from_right'}}>
      <AppNavigationStack.Screen
        name={ScreenNames.CITY_LIST}
        component={CityListScreen}
        options={{title: 'Cities'}}
      />
      <AppNavigationStack.Screen
        name={ScreenNames.CITY_DETAIL}
        component={CityDetailsScreen}
      />
    </AppNavigationStack.Navigator>
  );
};

export default AppNavigation;
