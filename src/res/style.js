import { StyleSheet } from 'react-native';
import unit from './unit';
import color from './color';

const styles = StyleSheet.create({
  // utility styles
  container: {
    flex: 1,
    width: unit.windowWidth(1),
    height: unit.windowHeight(1),
    backgroundColor: color.white,
  },
  containerTransparent: {
    flex: 1,
    width: unit.windowWidth(1),
    height: unit.windowHeight(1),
    backgroundColor: 'transparent',
  },
  containerPrimaryBG: {
    flex: 1,
    width: unit.windowWidth(1),
    height: unit.windowHeight(1),
    backgroundColor: color.primary90,
  },
  containerAuthHeader: {
    width: unit.windowWidth(1),
    paddingHorizontal: unit.scale(20),
  },

  //set font size
  fontHeader: 24,
  fontSubHeader: 13,
  fontTitle: 16,
  fontSubTitle: 11,
  font20: 20,
  fontInputLabel: 20,
  font10: 10,
  font13: 13,
  font12: 12,
  font14: 14,
  font15: 15,
  font18: 18,
  font22: 22,

  //header absolute height
  heightHeader: 12,

  //Set margin style
  m0: { margin: 0 },
  mt0: { marginTop: 0 },
  mb0: { marginBottom: 0 },
  my0: { marginTop: 0, marginBottom: 0 },
  ml0: { marginLeft: 0 },
  mr0: { marginRight: 0 },
  mx0: { marginLeft: 0, marginRight: 0 },
  ml5: { marginLeft: unit.scale(5) },
  ml10: { marginLeft: unit.scale(10) },
  ml15: { marginLeft: unit.scale(15) },
  //Set padding style
  p0: { padding: 0 },
  pt0: { paddingTop: 0 },
  pb0: { paddingBottom: 0 },
  py0: { paddingTop: 0, paddingBottom: 0 },
  pl0: { paddingLeft: 0 },
  pr0: { paddingRight: 0 },
  px0: { paddingLeft: 0, paddingRight: 0 },
  pb1: { paddingBottom: 1 },
  pb2: { paddingBottom: 2 },
  pr2: { paddingRight: 2 },
  pr3: { paddingRight: 3 },
  pl10: { paddingLeft: unit.scale(10) },
  ph10: {
    paddingHorizontal: unit.scale(10),
  },
  ph20: {
    paddingHorizontal: unit.scale(20),
  },
  pv10: {
    paddingVertical: unit.scale(10),
  },
  pv40: {
    paddingVertical: unit.scale(40),
  },
  headingTop: {
    marginTop: unit.scale(50),
    alignSelf: 'center',
    textAlign: 'center',
  },

  cancel: {
    position: 'absolute',
    right: unit.scale(3),
    top: unit.scale(6),
    zIndex: 1,
  },
  elevation5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  footerPage: {
    padding: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const layoutStyles = StyleSheet.create({
  // layout root styles
  root: {},
  // layout header styles
  header: {
    paddingHorizontal: unit.scale(12),
    flex: 0,
    backgroundColor: color.white,
  },
  headerElevation: {
    shadowColor: color.gray1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // layout search
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.gray2,
    borderRadius: unit.scale(4),
    minHeight: unit.scale(36),
  },
  searchIcon: {
    flex: 0,
    marginHorizontal: unit.scale(8),
  },
  searchInput: { color: color.fontSecondary, flex: 1 },
  // layout body styles
  body: {
    flex: 1,
    backgroundColor: color.gray2,
    paddingBottom: unit.scale(12),
  },
  baseBody: {
    paddingHorizontal: unit.scale(12),
  },
  baseHeader: {
    width: unit.windowWidth(1),
    height: unit.scale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: unit.scale(30),
    paddingHorizontal: unit.scale(15),
    backgroundColor: color.white,
    marginBottom: unit.scale(0.5),
    shadowColor: color.black,
    shadowOffset: {
      width: 1,
      height: unit.scale(5),
    },
    shadowOpacity: 0.1,
    shadowRadius: unit.scale(4),
    elevation: unit.scale(4),
  },
  headerAndroid: {
    width: unit.windowWidth(1),
    height: unit.scale(90),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: unit.scale(30),
    paddingHorizontal: unit.scale(15),
    justifyContent: 'space-between',
    backgroundColor: color.white,
    marginBottom: unit.scale(0.5),
    shadowColor: color.black,
    shadowOffset: {
      width: 1,
      height: unit.scale(5),
    },
    shadowOpacity: 0.1,
    shadowRadius: unit.scale(4),
    elevation: unit.scale(4),
  },
});

export default styles;
