import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from './AuthStack'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { isReadyRef, navigationRef } from "./NavigationServices";
import { AppStackC } from "@app/constants/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginController from "@app/screens/login/LoginController";
import AdvertisementController from "@app/screens/add/AdvertisementController";

const Stack = createNativeStackNavigator();


export default function MainNavigator({ theme }) {
  const auth = useSelector((state) => state.auth);

  console.log('OOOOOOOOO---ooooooo',auth)
  //   const catalog = useSelector((state) => state.catalog);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => (isReadyRef.current = true)}
    >
      {/* {!auth?.isAuthenticated ?
        (
          // NOT authenticated users rooting
          < AuthStack />
        )
        :
        (
          // Authenticated users rooting
          <AppStack />
        )
      } */}
      <AppStack />

      {/* <Stack.Navigator>
        {!auth?.isAuthenticated ? (
          <Stack.Screen
            name={AppStackC.LOGIN_SCREEN}
            component={LoginController}
            options={() => ({
              title: AppStackC.LOGIN_SCREEN,
              headerShown: false,
            })}
          />
        ) : (
          <Stack.Screen
            name={AppStackC.ADVERTISEMENT_SCREEN}
            component={AdvertisementController}
            options={() => ({
              title: AppStackC.ADVERTISEMENT_SCREEN,
              headerShown: false,
            })}
          />
        )}
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
