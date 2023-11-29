import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackC, AuthStackC } from '../constants/navigation';
import LoginController from '@app/screens/login/LoginController';
import AdvertisementController from '@app/screens/add/AdvertisementController';
import AuthStackScreen from '@app/screens/misc/AuthStackScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return <Stack.Navigator initialRouteName={AuthStackC.AUTH_STACK_SCREEN}>
   
    <Stack.Screen
      name={AppStackC.LOGIN_SCREEN}
      component={LoginController}
      options={() => ({
        title: AppStackC.LOGIN_SCREEN,
        headerShown: false,
      })}
    />
     <Stack.Screen
      name={AuthStackC.AUTH_STACK_SCREEN}
      component={AuthStackScreen}
      options={() => ({
        title: AppStackC.LOGIN_SCREEN,
        headerShown: false,
      })}
    />
  </Stack.Navigator>
}

export default AuthStack;
