import BaseLayout from "@app/components/layout";
// import HomeView from '@app/containers/Home';
import R from "@app/res/R";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginView from "./LoginView";
import { useHomeModel } from "./LoginModel";

const LoginController = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { onPressSigninButton } = useHomeModel();

  console.log("render");
  return (
    <LoginView
      {...props}
      onPress={onPressSigninButton}
      isLoading={auth.isLoadingRequest && auth.requestLoader === "login"}
    />
  );
};

export default LoginController;
