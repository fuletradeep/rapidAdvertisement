import R from "@app/res/R";
import { Text, View } from "native-base";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const ButtonOutlined = (props) => {
  const {
    title = "No Title",
    disabled = false,
  } = props
  return (
    <View borderRadius={50} marginY={2} style={props.containerStyle}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => { props.onPress() }} disabled={disabled}>
        <View style={[styles.container, props.style]}>
          <Text style={[styles.caption, props.textStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    // width: 160,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 10,
    // marginBottom: 40,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: R.color.primaryDark
    // elevation: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // },
    // shadowColor: 'black',
    // shadowOpacity: 0.35,
    // shadowRadius: 5
  },
  caption: {
    color: R.color.primaryLight,
    fontSize: R.unit.scale(20),
    fontFamily: R.font.Medium
    // textAlign:'center'
  }
});

export default ButtonOutlined;
