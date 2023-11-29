import { FlatList, View } from "react-native";
import React, { useState } from "react";
import { CheckIcon, Icon, Select, VStack } from "native-base";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { AppStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { setStore } from "@app/store/auth/authSlice";

const StoreSelectScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [value, setValue] = useState('');


  const handleChangeValue = (value) => {
    setValue(value);
    dispatch(setStore(value))
    navigation.navigate(AppStackC.ADVERTISEMENT_VIEW)
  };
  return (
    <View style={{ flex: 1 }}>
      <VStack p={R.unit.scale(10)}>
        <Text
          numberOfLines={1}
          color={R.color.black2}
          variant="content"
          font="bold"
        >
          Select Store
        </Text>

        <Select
          h={10}
          selectedValue={value?.dbName}
          variant="rounded"
          backgroundColor={R.color.white}
          borderRadius={8}
          borderColor={R.color.black2}
          fontFamily={R.font.Regular}
          accessibilityLabel={'Select Store'}
          placeholder={'select'}
          _selectedItem={{
            bg: R.color.primaryLight,
            endIcon: <CheckIcon size="5" color="white" />,
            _text: {
              color: R.color.white,
            },
          }}
          dropdownIcon={
            <Icon
              as={<MaterialIcons name="keyboard-arrow-down" />}
              size={5}
              mr="4"
              color="muted.400"
            />
          }
          onValueChange={(itemValue) => handleChangeValue(itemValue)}
        >
          {auth?.user?.store?.length > 0 &&
            auth?.user?.store?.map((item, index) => {
              return (
                <Select.Item
                  key={index}
                  label={item?.storeName}
                  value={item}
                />
              );
            })}
          {/* <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" /> */}
        </Select>
      </VStack>
    </View>
  );
};

export default StoreSelectScreen;
