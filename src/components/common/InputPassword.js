import React, { useState } from 'react';
import R from '@app/res/R';
import { FormControl, Icon, Input, Pressable, VStack, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";

const InputPassword = (props) => {
  const [show, setShow] = useState(false);

  const {
    value = '',
    label = 'label',
    labelFontFamily = R.font.Regular,
    labelColor = R.color.secondaryDark,
    placeholder = "Placeholder",
    focusOutlineColor = R.color.primaryLight,
    borderColor = R.color.placeholder,
    fontFamily = R.font.Regular,
    backgroundColor = R.color.white,
    borderRadius = 8,
    error = "",
    style = {}
  } = props;
  return (
    <VStack>
      <FormControl isInvalid={error}>
        <FormControl.Label _text={{
          fontFamily: labelFontFamily,
          color: labelColor,
        }}>{label}</FormControl.Label>
        <Input
          h={10}

          placeholder={placeholder}
          focusOutlineColor={focusOutlineColor}
          borderColor={borderColor}
          fontFamily={fontFamily}
          style={style}
          borderRadius={borderRadius}

          backgroundColor={backgroundColor}
          type={show ? "text" : "password"}
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color={R.color.secondary} />
          </Pressable>}
          onChangeText={props.onChangeText}
          value={value}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
};


export default InputPassword;
