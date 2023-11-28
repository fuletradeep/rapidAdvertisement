import React from 'react';
import R from '@app/res/R';
import { FormControl, HStack, Input, Text, VStack, WarningOutlineIcon } from 'native-base';

const InputNormal = ({
  value = '',
  enableLabel = true,
  label = 'label',
  labelFontFamily = R.font.Medium,
  labelColor = R.color.secondaryDark,
  placeholder = "Placeholder",
  focusOutlineColor = R.color.primaryLight,
  borderColor = R.color.placeholder,
  borderRadius = 8,
  fontFamily = R.font.Regular,
  keyboardType = 'default',
  backgroundColor = R.color.white,
  isReadOnly = false,
  autoFocus = false,
  enableRightLabel = false,
  rightLabel = 'Text : ',
  rightLabelValue = '$0',
  error = "",
  style = {},
  containerStyle = {width:R.unit.scale(150)},
  onChangeText
}) => {
  return (
    <VStack pb={1} style={containerStyle}>
      <FormControl isInvalid={error}>
        {enableLabel && <HStack justifyContent={'space-between'} alignItems={'center'}>
          <FormControl.Label _text={{
            fontFamily: labelFontFamily,
            color: labelColor,
          }}>{label}</FormControl.Label>
          {enableRightLabel &&
            <HStack>
              <Text color={labelColor} fontFamily={labelFontFamily}>{rightLabel}</Text>
              <Text fontFamily={labelFontFamily}>{rightLabelValue}</Text>
            </HStack>
          }
        </HStack>}
        <Input
          // h={R.unit.scale(35)}
          h={10}
          placeholder={placeholder}
          focusOutlineColor={focusOutlineColor}
          borderColor={borderColor}
          fontFamily={fontFamily}
          style={style}
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          isReadOnly={isReadOnly}
          // showSoftInputOnFocus={showSoftInputOnFocus}
          autoFocus={autoFocus}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
};


export default InputNormal;
