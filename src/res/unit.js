import { Dimensions } from "react-native";

const containerWidth = Dimensions.get("window").width;
const containerHeight = Dimensions.get("window").height;
const initialScale = Math.min(containerWidth, containerHeight) / 357;
const guidelineBaseWidth = 390; //360;
const guidelineBaseHeight = 844; //760;

const unit = {
  scale: (size) => (containerWidth / guidelineBaseWidth) * size,
  verticalScale: (size) => (containerHeight / guidelineBaseHeight) * size,
  // scale: (multi) => (multi ? initialScale * (multi - 1) : initialScale),
  fontSize: (multi) => (multi ? initialScale * 16 * multi : initialScale * 16),
  windowHeight: (multi) => (multi ? containerHeight * multi : containerHeight),
  windowWidth: (multi) => (multi ? containerWidth * multi : containerWidth),
  screenHeader: () => initialScale * 48,
  containerWidth: Dimensions.get("window").width
};

export default unit;
