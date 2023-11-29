import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackC } from '../constants/navigation';
import LoginController from '@app/screens/login/LoginController';
import AdvertisementController from '@app/screens/add/AdvertisementController';
import AuthStackScreen from '@app/screens/misc/AuthStackScreen';
import AppStackScreen from '@app/screens/misc/AppStackScreen';
import AdvertisementView from '@app/screens/add/AdvertisementView';


const Stack = createNativeStackNavigator();

const AppStack = () => {

  return <Stack.Navigator initialRouteName={AppStackC.ADVERTISEMENT_SCREEN}>
   <Stack.Screen
      name={AppStackC.APP_STACK_SCREEN}
      component={AppStackScreen}
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
    <Stack.Screen
      name={AppStackC.ADVERTISEMENT_VIEW}
      component={AdvertisementView}
      options={() => ({
        title: AppStackC.ADVERTISEMENT_VIEW,
        headerShown: false,
      })}
    />
  </Stack.Navigator>
}

export default AppStack;
