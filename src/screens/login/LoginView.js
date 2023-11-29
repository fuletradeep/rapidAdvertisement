import { View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import R from "@app/res/R";
import { HStack, VStack } from "@gluestack-ui/themed";
import InputNormal from "@app/components/common/InputNormal";
import InputPassword from "@app/components/common/InputPassword";
import ButtonFilled from "@app/components/common/ButtonFilled";
import { validateEmail } from "@app/util/Validation";

const LoginView = (props) => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    if (!formData.username) {
      setErrors({ username: "Email address is required" });
      return;
    }
    if (!formData.password) {
      setErrors({ password: "Password is required" });
      return;
    }
    setErrors({});
    props.onPress(formData);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: R.color.white,
        // paddingVertical: R.unit.scale(45),
      }}
    >
      <VStack justifyContent="center" alignItems="center" flex={1}>
        <VStack height={R.unit.scale(50)} width={R.unit.scale(150)}>
          <R.svg.logo height={R.unit.scale(50)} width={R.unit.scale(150)} />
        </VStack>

        <VStack mt={R.unit.verticalScale(150)}>
          <InputNormal
            label={R.strings.auth.email_address}
            placeholder={R.strings.auth.email_address_placeholder}
            keyboardType="email-address"
            value={formData?.username}
            onChangeText={(value) =>
              setData({
                ...formData,
                username: value,
              })
            }
            error={errors?.username}
          />
          <InputPassword
            label={R.strings.auth.password}
            placeholder={R.strings.auth.password_placeholder}
            keyboardType="email-address"
            value={formData?.password}
            onChangeText={(value) =>
              setData({
                ...formData,
                password: value,
              })
            }
            error={errors?.password}
          />

          <ButtonFilled
            title={"Login"}
            onPress={onSubmit}
            isShowLoader={props.isLoading}
          />
        </VStack>
      </VStack>
    </View>
  );
};

export default LoginView;
