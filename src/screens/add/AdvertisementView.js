import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  AppState,
  Animated,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import ButtonFilled from "@app/components/common/ButtonFilled";
import R from "@app/res/R";
import SideMenu from "@app/components/view/SideMenu";
import { isVideoUrl } from "@app/util/Validation";
import Video from "react-native-video";

let timer = () => {};
const AdvertisementView = (props) => {
  StatusBar.setHidden(true);
  const advertisementList = useSelector((state) => state.advertisement);
  const appState = useRef(AppState.currentState);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (advertisementList?.advertisementList?.length) {
      const length = advertisementList?.advertisementList?.length;
      setImage(advertisementList?.advertisementList[index]);
      setImageUrl(advertisementList?.advertisementList[index].AdsImage);
      timer = setTimeout(() => {
        if (length - 1 !== index) {
          setIndex((index) => index + 1);
          clearTimeout(timer);
        } else {
          setIndex(0);
          clearTimeout(timer);
        }
      }, Number(advertisementList?.advertisementList[index]?.Rotation) * 1000);
    }
    return () => clearTimeout(timer);
  }, [advertisementList?.advertisementList, index]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {isButtonVisible && <SideMenu {...props} />}
        {advertisementList?.advertisementList !== undefined && (
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setIsButtonVisible(!isButtonVisible)}
          >
            {imageUrl && (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {isVideoUrl(imageUrl) ? (
                  <Video
                    source={{ uri: imageUrl }} // the video file
                    paused={false} // make it start
                    style={{ width: "100%", height: "100%" }} // any style you want
                    repeat={true} // make it a loop
                  />
                ) : (
                  <Image
                    source={{ uri: imageUrl }}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </View>
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AdvertisementView;
