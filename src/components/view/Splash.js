import React from 'react';

import R from '@app/res/R';
import { ImageBackground, StatusBar, Text } from 'react-native';
import { View } from '@gluestack-ui/themed';
const Splash = () => {
  return (
    <ImageBackground source={R.image.splash_bg()} style={R.style.container}>
      <StatusBar
        translucent
        animated
        StatusBarAnimation="fade"
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle="light-content"
        hidden />

      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <View paddingBottom={'40'}>
          <R.svg.logo />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
