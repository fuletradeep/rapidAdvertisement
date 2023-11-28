import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import React from "react";
import { HStack, VStack } from "@gluestack-ui/themed";
import Text from "@app/components/common/Text";
import R from "@app/res/R";

const HeaderTopView = ({ tab = null, onPress,setTab }) => {
  const focusedTab1 = tab == 1; //"WEEK"
  const focusedTab2 = tab == 2; //"MONTH"
  const focusedTab3 = tab == 3; //"YEAR"

  return (
    <HStack
      flex={0.5}
      justifyContent={"space-around"}
      alignItems={"center"}
      height={"100%"}
    >
      <TouchableOpacity
        style={{
          borderBottomWidth: focusedTab1 ? 5 : 0,
          borderBottomColor: R.color.green,
          height: "100%",
                  justifyContent: "center",
          alignItems:'center'
        }}
        onPress={() => setTab(1)}
      >
        <VStack alignItems={"center"}>
          <Text
            numberOfLines={1}
            color={focusedTab1 ? R.color.white : R.color.fontDisable}
            variant="h0"
            transform="uppercase"
          >
            {"Week"}
          </Text>
        </VStack>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderBottomWidth: focusedTab2 ? 5 : 0,
          borderBottomColor: R.color.green,
          height: "100%",
          justifyContent: "center",
          alignItems:'center'
        }}
        onPress={() => setTab(2)}
      >
        <VStack alignItems={"center"}>
          <Text
            numberOfLines={1}
            color={focusedTab2 ? R.color.white : R.color.fontDisable}
            variant="h0"
            transform="uppercase"
          >
            {"Month"}
          </Text>
        </VStack>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderBottomWidth: focusedTab3 ? 5 : 0,
          borderBottomColor: R.color.green,
          height: "100%",
          justifyContent: "center",
          alignItems:'center'
        }}
        onPress={() => setTab(3)}
      >
        <VStack alignItems={"center"}>
          <Text
            numberOfLines={1}
            color={focusedTab3 ? R.color.white : R.color.fontDisable}
            variant="h0"
            transform="uppercase"
          >
            {"Year"}
          </Text>
        </VStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default HeaderTopView;
