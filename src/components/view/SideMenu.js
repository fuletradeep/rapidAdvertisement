import React, { useState } from "react";

import R from "@app/res/R";
import {
  ImageBackground,
  Linking,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { HStack, Image, Menu, Text, View } from "native-base";
import { useDispatch } from "react-redux";
import { logout } from "@app/store/auth/authSlice";
import { AppStackC } from "@app/constants/navigation";
import ModelView from "./ModelView";
import constant from "@app/constants/constant";
import { useAdvertisementModel } from "@app/screens/add/AdvertisementModel";
const SideMenu = ({ navigation }) => {
  const dispatch = useDispatch(); //temp
  const [models, setModels] = useState({});
  const { getAddvertisement,onLogoutPress } = useAdvertisementModel();
  return (
    <View style={{ position: "absolute", top: 20, right: 20, zIndex: 10000 }}>
      <Menu
        w="100%"
        trigger={(triggerProps) => {
          return (
            <TouchableOpacity {...triggerProps}>
              <Image
                source={R.image.home_menu_vector()}
                w={R.unit.scale(25)}
                h={R.unit.scale(25)}
                resizeMode="contain"
                my={2}
                alt="home_menu_vector"
              />
            </TouchableOpacity>
          );
        }}
        _backdrop={{
          _dark: {
            bg: "coolGray.800",
          },
          bg: "warmGray.900",
        }}
      >
        <Menu.Item onPress={() => getAddvertisement()}>
          <HStack alignItems={"center"} space={2}>
            <Image
              source={R.image.menu_refresh()}
              w={R.unit.scale(16)}
              h={R.unit.scale(16)}
              resizeMode="contain"
              alt="home_menu_vector"
            />
            <Text fontFamily={R.font.Medium}>Refresh</Text>
          </HStack>
        </Menu.Item>
        <Menu.Item  onPress={() => onLogoutPress()}>
          <HStack alignItems={"center"} space={2}>
            <Image
              source={R.image.menu_logout()}
              w={R.unit.scale(16)}
              h={R.unit.scale(16)}
              resizeMode="contain"
              alt="home_menu_vector"
            />
            <Text fontFamily={R.font.Medium}>Logout</Text>
          </HStack>
        </Menu.Item>
      </Menu>
      <ModelView
        title={"Logout..!"}
        message={"Are you sure you want to logout ?"}
        iconSource={R.image.menu_logout()}
        showModal={models?.logout}
        onClose={() => setModels({ logout: false })}
        buttonTitle1={"No"}
        buttonTitle2={"Yes"}
        onPress1={() => setModels({})}
        onPress2={() => dispatch(logout())}
      />
    </View>
  );
};

export default SideMenu;
