import R from '@app/res/R';
import { Heading, HStack, Spinner } from '@gluestack-ui/themed';
import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default function Spinners({
  status = false,
  title = "Loading...",
  size = "lg"
}) {
  return (
    status ?
      <HStack space={2} style={styles.spinnerStyle}>
        {/* <ActivityIndicator size={props.size || 'large'} color={theme.colors.primary} /> */}
        <Spinner size={size} accessibilityLabel="Loading data" color={R.color.primaryLight} />
        <Heading color={R.color.primary90} >{title}</Heading>
      </HStack >
      : null
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    width: width,
    height: height * 0.80,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    zIndex: 99,
    backgroundColor: "rgba(255,255,255,0.2)",
    left: 0,
    top: 0,
  }
};
