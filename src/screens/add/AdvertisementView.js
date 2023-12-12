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
import Spinners from "@app/components/common/Spinner";
import NetInfo from "@react-native-community/netinfo";

let timer = () => {};
const AdvertisementView = (props) => {
  StatusBar.setHidden(true);
  const advertisementList = useSelector((state) => state.advertisement);
  const videoPlayer = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [index, setIndex] = useState(0);
  const [isConnected, setIsConnected] = useState("");
  useEffect(() => {
    if (advertisementList?.advertisementList?.length) {
      const length = advertisementList?.advertisementList?.length;
      if (advertisementList?.advertisementList[index]?.ImageType !== "HALF") {
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
      } else {
        setIndex((index) => index + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [advertisementList?.advertisementList, index]);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 30000);
  }, [isButtonVisible]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected == true) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {advertisementList?.isLoadingRequest ? (
        <Spinners size="lg" status={true} />
      ) : (
        <View style={{ flex: 1 }}>
          {isButtonVisible && <SideMenu {...props} />}
          {advertisementList?.advertisementList !== undefined && (
            <Pressable
              style={{ flex: 1 }}
              onPress={() => setIsButtonVisible(!isButtonVisible)}
            >
              {isConnected ? (
                <>
                  {imageUrl && (
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {isVideoUrl(imageUrl) ? (
                        <View
                          style={{ flex: 1, width: "100%", height: "100%" }}
                        >
                          <Video
                            ref={videoPlayer}
                            source={{ uri: imageUrl }}
                            //  source={{
                            //    uri: '../../res/video/demo.mp4',
                            //  }} // the video file
                            paused={false} // make it start
                            style={{ flex: 1 }} // any style you want
                            repeat={true} // make it a loop
                            onError={(error) => console.log("EEEE", error)}
                            fullscreen={true}
                            fullscreenOrientation={"landscape"}
                            resizeMode="cover"
                            poster={
                              Image.resolveAssetSource(R.image.loading()).uri
                            }
                          />
                        </View>
                      ) : (
                        <Image
                          source={{ uri: imageUrl }}
                          style={{ width: "100%", height: "100%" }}
                        />
                      )}
                    </View>
                  )}
                </>
              ) : (
                <View style={{ flex: 1, width: "100%", height: "100%" }}>
                  <Video
                    ref={videoPlayer}
                    source={R.video.demo()}
                    //  source={{
                    //    uri: '../../res/video/demo.mp4',
                    //  }} // the video file
                    paused={false} // make it start
                    style={{ flex: 1 }} // any style you want
                    repeat={true} // make it a loop
                    onError={(error) => console.log("EEEE", error)}
                    fullscreen={true}
                    fullscreenOrientation={"landscape"}
                    resizeMode="cover"
                    poster={Image.resolveAssetSource(R.image.logo()).uri}
                  />
                </View>
              )}
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default AdvertisementView;
