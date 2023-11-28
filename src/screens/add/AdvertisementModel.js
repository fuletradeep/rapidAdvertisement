import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "react-native-crypto-js";
import { getAdvertisementList } from "@app/store/advertisement/advertisementSlice";

global.Buffer = require('buffer').Buffer;

export function useAdvertisementModel() {
  const dispatch = useDispatch();

  let ciphertext = CryptoJS.AES.encrypt('6PQN3NER39N9E8Y3M26XRY282Z', 'secret key 123').toString();

  const getAddvertisement = () => {
    dispatch(getAdvertisementList(ciphertext))
  }

  return{
    getAddvertisement
  }
};
