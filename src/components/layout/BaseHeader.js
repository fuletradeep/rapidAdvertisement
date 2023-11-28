import React, { useEffect, useState } from "react";
import R from "@app/res/R";

import {
  View,
  ViewStyle,
  StyleSheet,
  Platform,
  Alert,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import Text from "@app/components/common/Text";
// import NavigationService from '@app/navigation/NavigationService';
import { useDispatch, useSelector } from "react-redux";
import { NavigationStackC } from "@app/constants/navigation";
import { HStack, Image, VStack } from "@gluestack-ui/themed";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import HeaderTopView from "../view/HeaderTopView";

const BaseHeader = (props) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(1)
  //   const auth = useSelector((state) => state.auth);

  const {
    headerAbsolute = false,
    onLayout,
    onHeaderBtnPress,
    enableTabView,
    headerBtnText,
    headerBtnIcon,
    headerBtnColor
  } = props;

  // useEffect(() => {
  //   if (auth && !auth.isAuthenticated) {
  //     NavigationService.stackFirst(NavigationStackC.AUTH_STACK);
  //   }
  // }, [auth]);

  const logoutClick = () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          //   var data = new FormData()
          //   data.append('param', "logOut");
          //   data.append('user_id', auth?.data?.user_id);
          //   data.append('lat', "123");
          //   data.append('long', "123");
          //   dispatch(signOut(data))
        },
      },
    ]);
  };

  const shareClick = () => {
    // NavigationService.navigate(AppStackC.INVITE_FRIEND_SCREEN);
  };

  return (
    <View
      style={[
        headerAbsolute
          ? styles.headerAbsoluteTrue
          : [styles.headerAbsoluteFalse, props.headerAbsoluteFalse],
      ]}
      onLayout={(event) =>
        headerAbsolute ? onLayout(event.nativeEvent.layout) : null
      }
    >
      <View
        style={[
          Platform.OS === "android" ? styles.headerAndroid : styles.header,
          { justifyContent: "space-between" },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="h0"
            letterSpacing={5}
            transform={"uppercase"}
          >
            {"Suzlon"}
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.green}
            variant="h0"
            letterSpacing={5}
            gutterLeft={10}
            transform={"uppercase"}
          >
            {"RESTRO"}
          </Text>
        </View>
        {
          enableTabView && <HeaderTopView tab={tab} setTab={setTab} />
        }
        

        <TouchableOpacity
          onPress={onHeaderBtnPress}
          style={[
            styles.horizontalStyle,
            {
              borderRadius: R.unit.scale(45),
              backgroundColor: headerBtnColor,
              paddingHorizontal: R.unit.scale(46),
              paddingVertical: R.unit.verticalScale(25),
            },
          ]}
        >
          <MaterialIcons
            name={headerBtnIcon}
            size={R.unit.scale(46)}
            color={R.color.white}
          />
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="h0"
            gutterLeft={35}
          >
            {headerBtnText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: R.unit.windowWidth(1),
    height: R.unit.scale(150),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: R.unit.scale(58),
    backgroundColor: R.color.header,
  },
  headerAndroid: {
    width: R.unit.windowWidth(1),
    height: R.unit.verticalScale(200),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: R.unit.scale(58),
    justifyContent: "space-between",
    backgroundColor: R.color.header,
  },
  headerAbsoluteTrue: { position: "absolute", top: 0, zIndex: 1 },
  headerAbsoluteFalse: { backgroundColor: R.color.background },
  horizontalStyle: { flexDirection: "row", alignItems: "center" },
});

export default BaseHeader;
