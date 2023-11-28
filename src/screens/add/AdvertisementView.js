import { View, Text, TouchableOpacity, Image, Pressable, AppState } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import ButtonFilled from "@app/components/common/ButtonFilled";
import R from "@app/res/R";

const AdvertisementView = (props) => {
  const advertisementList = useSelector((state) => state.advertisement);
  const appState = useRef(AppState.currentState);
  const [isButtonVisible, setIsButtonVisible] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 30000);
  }, [isButtonVisible]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        nextAppState === 'inactive'
      ) {
        props?.onLogoutPress()
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const onSubmit = () => {
    props?.onLogoutPress()
  }

  return (
    <Pressable
      style={{ flex: 1 }}
      onHoverIn={() => {
        console.log("444");
        setIsButtonVisible(true);
      }}
    >
      <Pressable
        style={{ flex: 1 }}
        onHoverIn={() => {
          console.log("444");
          setIsButtonVisible(true);
        }}
      >
        {isButtonVisible && (
          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              zIndex: 100000,
              right: 0,
              top: 20,
            }}
          >
            <ButtonFilled
              title={"Logout"}
              onPress={onSubmit}
              isShowLoader={props?.isLoading}
              containerStyle={{
                width: R.unit.scale(60),
                height: R.unit.verticalScale(60),
                justifyContent: "center",
                alignItems: "center",
                right: R.unit.verticalScale(10),
                alignSelf: "flex-end",
              }}
            />
          </View>
        )}
        <Swiper
          loop={true}
          autoplay={true}
          showsPagination={false}
          StickyHeaderComponent={
            <ButtonFilled
              title={"Logout"}
              // onPress={onSubmit}
              isShowLoader={props?.isLoading}
              containerStyle={{
                width: R.unit.scale(60),
                height: R.unit.verticalScale(60),
                justifyContent: "center",
                alignItems: "center",
                right: R.unit.verticalScale(10),
                alignSelf: "flex-end",
              }}
            />
          }
        >
          {advertisementList?.advertisementList !== undefined &&
            advertisementList?.advertisementList?.map((ele) => {
              return (
                <Pressable
                  activeOpacity={1}
                  style={{ flex: 1, backgroundColor: "transparent" }}
                  onPress={() => {
                    console.log("444");
                    setIsButtonVisible(!isButtonVisible);
                  }}
                  onHoverIn={() => {
                    console.log("444sdsd");
                    setIsButtonVisible(true);
                  }}
                >
                  <Image
                    source={{ uri: ele?.AdsImage }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </Pressable>
              );
            })}
        </Swiper>
      </Pressable>
    </Pressable>
  );
};

export default AdvertisementView;
