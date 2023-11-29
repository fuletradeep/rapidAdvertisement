import React, { FC, useEffect } from 'react';

import { AuthStackC } from '@app/constants/navigation';
import Splash from '@app/components/view/Splash';

const AuthStackScreen = (props) => {
  // const auth = useSelector((state) => state.auth);
  useEffect(() => {
    // let nextScreen = NavigationStackC.APP_STACK;
    // if (!auth.isAuthenticated) {
    //   nextScreen = AuthStackC.ON_BOARDINF_SCREEN;
    // }
    // NavigationService.stackFirst(nextScreen);
    console.log("AuthStack splash called");
    setTimeout(() => {
      props.navigation.replace(AuthStackC.LOGIN_SCREEN)
    }, 3000)
  }, []);

  return <Splash />;
};

export default AuthStackScreen;
