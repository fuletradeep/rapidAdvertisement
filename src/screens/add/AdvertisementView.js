import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import ButtonFilled from "@app/components/common/ButtonFilled";
import R from "@app/res/R";

const AdvertisementView = (props) => {
  const advertisementList = useSelector((state) => state.advertisement);
  console.log("wwwwwwwww", advertisementList);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(false)
    }, 3000);
  }, [isButtonVisible])
  

  return (
    <TouchableOpacity style={{ flex: 1, backgroundColor: "transparent" }} onFocus={() => setIsButtonVisible(true)}>
      {isButtonVisible && (
        <View style={{ backgroundColor: "transparent" }}>
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
        </View>
      )}

      <TouchableOpacity style={{ flex: 1, backgroundColor: "transparent" }} onFocus={() => setIsButtonVisible(true)}>
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
                <Image
                  source={{ uri: ele?.AdsImage }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              );
            })}
        </Swiper>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AdvertisementView;
