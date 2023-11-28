import React, { useState, useEffect, useRef } from 'react';
import {
  TextInput as TextInputR,
  View,
  StyleSheet,
  TextInputProps,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import R from '@app/res/R';
import Text from './Text';
import { FormControl, Icon, Input, Spinner, WarningOutlineIcon } from '@gluestack-ui/themed';
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
  isInputRightElementSearch?: boolean;
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

const TextInput: React.FC<PropsI> = (props) => {
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
      {/* <TextInputR
          {...props}
          ref={inputRef}
          style={{
            ...styles.input,
            ...props.style,
          }}
          editable={props.editable}
          selectionColor={R.color.white}
          placeholderTextColor={
            props.placeholderTextColor ? props.placeholderTextColor : R.color.fontSecondary
          }
          onBlur={(event) => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
          onFocus={(event) => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          onChangeText={(e: string) => handleChangeText(e)}
        /> */}

      <FormControl isRequired={props.isRequired} isInvalid={props.error !== null && props.error !== undefined}>

        <Input
          {...props}
          w={{
            base: "95%",
            md: "25%"
          }}
          InputLeftElement={props.isInputLeftElement ? <Icon as={<AntDesign name="search1" />} size={5} ml="4" color="muted.400" /> : <></>}
          InputRightElement={
            props.isInputRightElement ?
              props.isInputRightElementSearch ?
                <Spinner color={R.color.primaryDark} mr={4} />
                :
                <Icon as={<MaterialIcons name="keyboard-arrow-down" />} size={5} mr="4" color="muted.400" />
              : <></>
          }
          placeholder={props.placeholder}
          variant="rounded"
          backgroundColor={R.color.cardBgGrey}
          borderWidth={0}
          // p={3}
          my={0.5}
          pl={props.isInputLeftElement ? 3 : 5}
          fontSize={R.unit.scale(12)}
          onChangeText={(e: string) => handleChangeText(e)}
        />
        {props.helperText && <FormControl.HelperText _text={{
          fontSize: 'xs'
        }}>
          {props.helperText}
        </FormControl.HelperText>}
        <FormControl.ErrorMessage
          leftIcon={<WarningOutlineIcon size="xs" />}
          pl={1}
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
export default TextInput;

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
