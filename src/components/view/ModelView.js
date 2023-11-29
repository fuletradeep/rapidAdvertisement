// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

import R from "@app/res/R";
import { HStack, Image, Modal, Text } from "@gluestack-ui/themed";
import ButtonOutlined from "../common/ButtonOutlined";
import ButtonFilled from "../common/ButtonFilled";
import { StyleSheet } from "react-native";
import InputNormal from "../common/InputNormal";

const ModelView = ({
  title,
  message,
  type = "default", //'info' | 'danger' | 'success' | 'warning' | 'default'
  iconSource,
  showModal = false,
  onClose,
  buttonTitle1,
  buttonTitle2,
  onPress1,
  onPress2,
  loaderColor2 = "white",
  isShowLoader2 = false,
  showEditText = false,
  etLabel = "Label",
  etPlaceHolder = "Enter placeholder",
  etValue = "",
  onChangeText,
  errorsInput = null,
}) => {
  let src = R.image.hold();
  if (type == "default") {
    // iconSource
  } else if (type == "success") {
    src = R.image.success_green();
  } else if (type == "danger") {
    src = R.image.fail_red();
  }

  return (
    <Modal
    style={{zIndex:10000000}}
      isOpen={showModal}
      onClose={onClose}
      _backdrop={{
        _dark: {
          bg: "coolGray.800",
        },
        bg: "warmGray.900",
      }}
    >
      <Modal.Content>
        <Modal.Body backgroundColor={R.color.white}>
          <Image
            source={iconSource || src}
            style={{
              height: R.unit.scale(55),
              width: R.unit.scale(55),
            }}
            resizeMode="contain"
            my={2}
            alt="home_store_vector"
          />
          <Text
            fontFamily={R.font.Bold}
            fontSize={R.style.font20}
            lineHeight={26}
            my={1}
            style={styles[type]}
          >
            {title}
          </Text>
          {message && (
            <Text fontFamily={R.font.Regular} fontSize={R.style.fontSubHeader}>
              {message}
            </Text>
          )}

          {showEditText && (
            <InputNormal
              label={etLabel}
              placeholder={etPlaceHolder}
              value={etValue}
              onChangeText={onChangeText}
              error={errorsInput}
              containerStyle={{
                flex: 1,
              }}
            />
          )}
          <HStack
            space={2}
            // backgroundColor={R.color.white}
            // width={R.unit.windowWidth()}
            paddingRight={10}
            paddingTop={2}
          >
            {buttonTitle1 && (
              <ButtonOutlined
                title={buttonTitle1}
                onPress={onPress1}
                // disabled={disabled1}
                style={{
                  height: 35,
                  borderColor: R.color.primaryLight,
                }}
                containerStyle={{
                  flex: 1,
                }}
                textStyle={{
                  fontSize: R.style.font15,
                }}
              />
            )}

            {buttonTitle2 && (
              <ButtonFilled
                title={buttonTitle2}
                onPress={onPress2}
                loaderColor={loaderColor2}
                isShowLoader={isShowLoader2}
                // disabled={disabled2}
                style={{
                  height: 35,
                  borderColor: R.color.primaryLight,
                }}
                containerStyle={[buttonTitle1 ? { flex: 1 } : { width: "48%" }]}
                textStyle={{
                  fontSize: R.style.font15,
                }}
              />
            )}
          </HStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({
  danger: {
    color: R.color.danger,
  },
  success: {
    color: R.color.success,
  },
  default: {},
});
export default ModelView;
