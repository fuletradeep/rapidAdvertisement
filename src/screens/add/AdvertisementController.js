import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AdvertisementView from './AdvertisementView'
import { useAdvertisementModel } from './AdvertisementModel';
import CryptoJS from "react-native-crypto-js";


const AdvertisementController = () => {
  const { getAddvertisement,onLogoutPress } = useAdvertisementModel();
  useEffect(() => {
    getAddvertisement()
  }, [])
  return (
    <AdvertisementView onLogoutPress={onLogoutPress}/>
  )
}

export default AdvertisementController