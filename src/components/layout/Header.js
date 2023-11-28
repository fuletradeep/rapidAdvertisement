import R from '@app/res/R';
import { HStack, Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Header = (props) => {
  const {
    title = "Title"
  } = props
  return (
    <HStack bg={R.color.tertiary} pt={10} p={6} borderBottomRadius={30} justifyContent={'space-between'}>
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="arrow-back-circle-outline" size={26} color="black" />
      </TouchableOpacity>
      <View flex={1} alignItems={'center'} pr={'6'}>
        <Text numberOfLines={1} fontFamily={R.font.Medium} fontSize={15}>{title}</Text>
      </View>
    </HStack>
  );
};

export default Header;
