import { extendTheme, ITheme } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import {
  green,
  primary,
  red,
  secondary,
  tertiary
} from "./color";
var { width, height } = Dimensions.get('window');


/**
 * Learn more about extending/customizing theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/customizing-theme
 * https://docs.nativebase.io/customizing-components
 * https://docs.nativebase.io/utility-props#style-props
 * https://reactnavigation.org/docs/themes/
 */

const schema = {
  ...primary
};

const dark = {
  // primary: schema[500],
  // background: schema[900],
  // color: schema[300],
  // card: schema[900],
  // text: schema[1000],
  // border: schema[400],
  // notification: schema[400],
};

const light = {
  // primary: schema[500],
  // background: schema[50],
  // color: schema[300],
  // card: schema[50],
  // text: schema[1000],
  // border: schema[600],
  // notification: schema[600],
};

export const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  colors: {
    primary: schema,
    secondary: secondary,
    tertiary: tertiary,
    text: schema,
    dark: dark,
    light: light,
    red: {
      ...red,
    },
    green: {
      ...green,
    },
  },
  fonts: {
    // color: schema[300]
  },
  components: {
    // Button: {
    //   defaultProps: {
    //     colorScheme: "primary",
    //     bg: "primary.500",
    //     borderRadius: 15,
    //     variant: "solid",
    //   },
    // },
  },
});

export const navLightTheme = {
  dark: false,
  colors: light,
};

export const navDarkTheme = {
  dark: true,
  colors: dark,
};
