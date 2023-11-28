import React from 'react';

// constant/service
import R from '@app/res/R';

// components
import {
  View,
  ViewStyle,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import BaseHeader from './BaseHeader';

const BaseLayout = ( props) => {
  const {
    variant = 'base',
    disableScrollView = false,
    enableHeader = false,
    barStyle = 'default',
    enableTabView = false,
    statusBarBg = '#00000000',
  } = props;

  let bodyStyles = { ...styles.body };
  if (variant === 'base') {
    bodyStyles = { ...bodyStyles, ...styles.baseBody };
  }

  const BodyView = (p) => {
    return disableScrollView ? (
      <SafeAreaView
        style={[bodyStyles, props.bodyStyles ? props.bodyStyles : {}]}
        {...p}>
        {p.children}
      </SafeAreaView>
    ) : (
      <ScrollView
        style={[bodyStyles, props.bodyStyles ? props.bodyStyles : {}]}
        {...p}
        showsVerticalScrollIndicator={false}>
        {p.children}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1, ...props.rootStyles }}>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={statusBarBg}
        hidden
      />
      {enableHeader ? <BaseHeader {...props} /> : null}
      {!enableTabView ?
        <BodyView>{props.children}</BodyView>
        :
        <View
          style={[bodyStyles, props.bodyStyles ? props.bodyStyles : {}]}
          {...props}>
          {props.children}
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: R.color.background,
  },
  baseBody: {},
});

export default BaseLayout;
