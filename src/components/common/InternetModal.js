import R from '@app/res/R';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Text from './Text';

const { width } = Dimensions.get('window');
// import NoConnectionIllustrationSVG from '@app/res/images/svgs/NoConnectionIllustrationSVG';

const InternetModal = (props) => {

  return (
    <Modal
      animationType='slide'
      transparent
      visible={props.isVisible}
      presentationStyle='overFullScreen'
    >
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
          {/* <NoConnectionIllustrationSVG /> */}
          <View
            style={{
              marginHorizontal: R.unit.scale(10),
              marginVertical: R.unit.scale(5),
            }}
          >
            <Text variant='title2' color={R.color.gray9} fontWeight={'500'}>
              {R.strings.local_info.noInternetConnection}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: R.unit.scale(15),
              marginVertical: R.unit.scale(10),
              justifyContent: 'center',
            }}
          >
            <Text
              align={'center'}
              variant='h7'
              color={R.color.gray4}
            >{`Make sure your Wi-Fi or mobile data is turned on, then try again`}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignSelf: 'flex-end',
              height: R.unit.scale(42),
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                props.onConfirmation();
              }}
            >
              <View style={styles.button}>
                <Text variant='title2' fontWeight={'500'} color={R.color.primary}>
                  {R.strings.local_info.tryAgain}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// These are user defined styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    alignItems: 'center',
    elevation: 5,
    width: '70%',
    backgroundColor: R.color.white,
    borderRadius: 7,
    paddingTop: 12,
  },
  button: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(116, 56, 173, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InternetModal;
