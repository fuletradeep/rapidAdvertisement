import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AdvertisementView from "./AdvertisementView";
import { useAdvertisementModel } from "./AdvertisementModel";
import CryptoJS from "react-native-crypto-js";
import { useSelector } from "react-redux";
import StoreSelectScreen from "../store_selection/StoreSelectScreen";

const AdvertisementController = (props) => {
  const { getAddvertisement, onLogoutPress } = useAdvertisementModel();
  const auth = useSelector((state) => state.auth);

  console.log("auth", auth?.user?.store, auth?.store?.length);
  useEffect(() => {
    // onLogoutPress()
    getAddvertisement();
  }, []);
  return (
    <>
      {auth?.user?.store?.length > 1 ? (
        <StoreSelectScreen />
      ) : (
        <AdvertisementView onLogoutPress={onLogoutPress} />
      )}
    </>
  );
};

export default AdvertisementController;
