import React, { useState, useEffect, useRef } from 'react';
import {
  TextInput as TextInputR,
  StyleSheet,
  TextInputProps,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

import R from '@app/res/R';
import Text from './Text';
import { FormControl, Icon, Input, TextArea as TextAreaR, View, WarningOutlineIcon } from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

interface PropsI extends TextInputProps {
  onChangeText?: (text: string) => void;
  onHandleClear?: () => void;
  onVerifiedClick?: () => void;
  containerStyle?: any;
  inputContainer?: any;
  style?: any;
  isInputLeftElement?: boolean;
  isInputRightElement?: boolean;
  textButton?: boolean;
  textButtonPressed?: () => void;
  label: string;
  showCancelText?: boolean;
  isVerified?: boolean;
  editable?: boolean;
  alignItems?: string;
  info?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}

const TextArea: React.FC<PropsI> = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // update value when receives from parent
    setValue(props.value || "");
  }, [props.value]);

  const inputRef = useRef<any>(null);

  const handleChangeText = (text: string) => {
    setValue(text);

    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View
      flex={1}
      pb={1}
      style={{
        ...props.containerStyle,
      }}
    >
      {/* <View
        style={{
          ...styles.inputContainer,
          // borderColor: value ? R.color.gray5 : R.color.gray4,
          ...props.inputContainer,
        }}
      > */}

      <FormControl isRequired={props.isRequired} isInvalid={props.error !== null && props.error !== undefined}>
        <FormControl.Label _text={{
          fontFamily: R.font.Medium,
          color: R.color.secondaryDark,
        }}>{props.label}</FormControl.Label>
        <TextAreaR
          {...props}
          h={20}
          placeholder={props.placeholder}
          backgroundColor={R.color.white}
          borderWidth={1}
          borderRadius={8}
          autoCompleteType={undefined}
          fontSize={R.unit.scale(13)}
          onChangeText={(e: string) => handleChangeText(e)}
          focusOutlineColor={R.color.primaryLight}
          borderColor={R.color.placeholder}
          fontFamily={R.font.Regular}
          style={props.style}
        />
        {props.helperText && <FormControl.HelperText _text={{
          fontSize: 'xs'
        }}>
          {props.helperText}
        </FormControl.HelperText>}
        <FormControl.ErrorMessage
          leftIcon={<WarningOutlineIcon size="xs" />}
        >
          {props.error}
        </FormControl.ErrorMessage>
      </FormControl>
      {/* </View> */}

      {props.info ? (
        <Text variant="content" gutterTop={2} color={R.color.gray1}>
          {props.info}
        </Text>
      ) : null}
      {/* {props.error ? (
        <Text variant="content" gutterTop={2} color={R.color.danger}>
          {props.error}
        </Text>
      ) : null} */}
    </View>
  );
};
export default TextArea;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    // borderBottomWidth: R.unit.scale(1),
    // borderColor: R.color.gray4,
    // borderRadius: R.unit.scale(5),
    // marginTop: R.unit.scale(100),
    // backgroundColor: 'green',
  },
  input: {
    flex: 1,
    height: 75,
    padding: R.unit.scale(12),
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(12),
    color: R.color.white,
  },
  textButton: {
    color: R.color.primaryDark,
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(10),
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: R.unit.scale(8),
    backgroundColor: '#8c5bba',
  },
  label: {
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(16),
  },
  error: {
    marginTop: R.unit.scale(4),
    marginLeft: R.unit.scale(12),
    fontSize: R.unit.scale(12),
    color: R.color.white,
    fontFamily: R.font.Regular,
  },
});
