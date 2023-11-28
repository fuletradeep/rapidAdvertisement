import { View } from "react-native";
import React from "react";
import { VStack } from "@gluestack-ui/themed"
import R from "@app/res/R";
import Text from "@app/components/common/Text";

const CardheighestSell = ({ item }) => {
  return (
    <VStack
      backgroundColor={R.color.gray1 + 49}
      width={R.unit.scale(650)}
      mr={R.unit.scale(45)}
      alignSelf={"flex-start"}
      pt={R.unit.verticalScale(35)}
      pl={R.unit.scale(45)}
      height={R.unit.scale(230)}
      borderRadius={R.unit.scale(25)}
    >
      <Text color={R.color.white} variant="h1">
        {item.food_name}
      </Text>
      <Text color={R.color.white} variant="h4" gutterTop={R.unit.verticalScale(50)}>
        {item.count}
      </Text>
    </VStack>
  );
};

export default CardheighestSell;
