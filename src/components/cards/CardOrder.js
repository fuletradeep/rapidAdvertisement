import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import R from "@app/res/R";
import Text from "@app/components/common/Text";

const CardOrder = ({ item }) => {
  const renderFoodList = ({ item }) => {
    return (
      <View
        style={[
          styles.horizontalView,
          {
            justifyContent: "space-evenly",
            alignItems: "",
            marginTop: R.unit.verticalScale(60),
          },
        ]}
      >
        <Text
          textDecorationLine={item.isPrepared ? "line-through" : "none"}
          numberOfLines={1}
          color={item.isPrepared ? R.color.fontDisable : R.color.white}
          variant="h1"
          gutterLeft={R.unit.scale(10)}
        >
          {`${item.qty} `}
        </Text>
        <Text
          textDecorationLine={item.isPrepared ? "line-through" : "none"}
          numberOfLines={2}
          color={item.isPrepared ? R.color.fontDisable : R.color.white}
          variant="h1"
          style={{ width: R.unit.scale(400) }}
        >
          {item.food_name}
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <Image
        source={R.image.card_bottom()}
        style={{
          width: "100%",
          height: R.unit.verticalScale(45),
          marginBottom: -R.unit.verticalScale(20),
        }}
      />
    );
  };
  return (
    <TouchableOpacity
      style={{
        width: width/6.3,
        backgroundColor: R.color.header,
        minHeight: R.unit.verticalScale(300),
        flex: 1,
        // marginHorizontal: width/R.unit.scale(1000),
        marginBottom: R.unit.verticalScale(50),
        alignSelf:'center'
      }}
    >
      <View
        style={[
          styles.horizontalView,
          {
            backgroundColor:
              item.status === "Active"
                ? R.color.todo
                : item.status === "inProgress"
                ? R.color.hold
                : R.color.active,
            padding: R.unit.scale(45),
            justifyContent: "space-between",
          },
        ]}
      >
        <Text numberOfLines={1} color={R.color.white} variant="h1">
          {item.tableName}
        </Text>
        <Text numberOfLines={1} color={R.color.white} variant="h1">
          {item.timeLeft}
        </Text>
      </View>
      <FlatList
        data={item.foodItems}
        renderItem={renderFoodList}
        // ListFooterComponent={renderFooter}
        // ListFooterComponentStyle={{ marginTop: R.unit.verticalScale(77) }}
      />
      <Image
        source={R.image.card_bottom()}
        style={{
          width: "100%",
          height: R.unit.verticalScale(45),
          marginBottom: -R.unit.verticalScale(20),
        }}
      />
    </TouchableOpacity>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
