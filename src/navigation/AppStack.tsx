import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackC } from '../constants/navigation';
import LoginController from '@app/screens/login/LoginController';
import AdvertisementController from '@app/screens/add/AdvertisementController';


const Stack = createNativeStackNavigator();

const AppStack = () => {

  return <Stack.Navigator initialRouteName={AppStackC.LOGIN_SCREEN}>
   
    <Stack.Screen
      name={AppStackC.LOGIN_SCREEN}
      component={LoginController}
      options={() => ({
        title: AppStackC.LOGIN_SCREEN,
        headerShown: false,
      })}
    />
     <Stack.Screen
      name={AppStackC.ADVERTISEMENT_SCREEN}
      component={AdvertisementController}
      options={() => ({
        title: AppStackC.ADVERTISEMENT_SCREEN,
        headerShown: false,
      })}
    />
  </Stack.Navigator>
}

export default AppStack;
