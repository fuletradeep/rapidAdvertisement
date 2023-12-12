import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "react-native-crypto-js";
import {
  getAdvertisementList,
  getOfflineAdvertisement,
} from "@app/store/advertisement/advertisementSlice";
import { logout } from "@app/store/auth/authSlice";
import { AppStackC, AuthStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";

global.Buffer = require("buffer").Buffer;

export function useAdvertisementModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);

  const getAddvertisement = (status) => {
    if (status) {
      dispatch(getAdvertisementList(`RapidRMS181625`));
    } else {
      dispatch(getOfflineAdvertisement());
    }
  };

  const onLogoutPress = () => {
    dispatch(logout(dispatch));
    navigation.navigate(AppStackC.LOGIN_SCREEN);
  };

  return {
    getAddvertisement,
    onLogoutPress,
  };
}
