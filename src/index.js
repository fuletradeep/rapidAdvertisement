import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";
import { persistor, store } from "./store";
import RootAppConnect from "./RootApp";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NetInfo from "@react-native-community/netinfo";
import { config } from "@gluestack-ui/config";
import { NativeBaseProvider, Spinner } from 'native-base';


const RootApp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Is connected?", state.isConnected);
      if (state.isConnected == true) {
        setModalVisible(false);
        console.log("connection-Online");
      } else {
        setModalVisible(true);
        console.log("connection-OFFline");
      }
    });

    return () => {
      unsubscribe();
    };
  });
  return (
    <NativeBaseProvider config={config}>
      <ReduxProvider store={store}>
        <PersistGate loading={<Spinner size="lg" />} persistor={persistor}>
          <SafeAreaProvider>
            <FlashMessage position="bottom" />
            <RootAppConnect />
            {/* <InternetModal
                            isVisible={isModalVisible}
                            onConfirmation={() => {
                                setModalVisible(!isModalVisible);
                            }}
                        /> */}
          </SafeAreaProvider>
        </PersistGate>
      </ReduxProvider>
    </NativeBaseProvider>
  );
};

export default RootApp;
