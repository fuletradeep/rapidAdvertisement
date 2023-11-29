import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "react-native-crypto-js";
import { getAdvertisementList } from "@app/store/advertisement/advertisementSlice";
import { logout } from "@app/store/auth/authSlice";

global.Buffer = require("buffer").Buffer;

export function useAdvertisementModel() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log(
    "auth?.originalDbName",
    `RapidRMS${auth?.user?.store[0]?.comCod}`,
    auth?.originalDbName
  );

  const getAddvertisement = () => {
    dispatch(getAdvertisementList(`RapidRMS${auth?.originalDbName}`));
  };

  const onLogoutPress = () => {
    dispatch(logout());
  };

  return {
    getAddvertisement,
    onLogoutPress,
  };
}
