import R from "@app/res/R";
import { Spinner, Text, View } from "native-base";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const ButtonFilled = (props) => {
  const {
    title = 'No text',
    disabled = false,
    style = {},
    containerStyle = {marginTop:R.unit.verticalScale(50)},
    isShowLoader = false,
    loaderColor = "white"
  } = props;

  //background={TouchableNativeFeedback.Ripple('#EEE')}
  return (
    <View borderRadius={50} marginY={2} style={containerStyle}>
      {/* <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(R.color.gray7, true)} onPress={() => { props.onPress() }} disabled={disabled}>
        <View style={[styles.container, style]}>
          {!isShowLoader ? <Text style={[styles.caption, props.textStyle]}>{title}</Text>
            : <Spinner color={loaderColor} />}
        </View>
      </TouchableNativeFeedback> */}
      <TouchableOpacity activeOpacity={0.9} onPress={() => { props.onPress() }} disabled={disabled}>
        <View style={[styles.container, style]}>
          {!isShowLoader ? <Text style={[styles.caption, props.textStyle]}>{title}</Text>
            : <Spinner color={loaderColor} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    // width: 160,
    backgroundColor: R.color.primaryLight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 10,
    // marginBottom: 40,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: R.color.primaryLight,
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
    color: R.color.white,
    fontSize: 20,
    fontFamily: R.font.Medium
    // textAlign:'center'
  }
});

export default ButtonFilled;
