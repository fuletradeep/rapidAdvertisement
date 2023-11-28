import React, { FC } from 'react';

import R from '@app/res/R';

import { View, StyleSheet } from 'react-native';
import { Actionsheet, Box, Icon, Text, useDisclose } from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import toast from '@app/util/toast';

const ImagePickerModule = ({
  isOpen,
  onOpen,
  onClose,
  image,
  setImage,
  imageData,
  setImageData,
  allowsEditing = true,
  base64 = false
}) => {

  // const {
  //   isOpen,
  //   onOpen,
  //   onClose,
  //   image,
  //   setImage,
  //   imageData,
  //   setImageData,
  //   allowsEditing = true,
  //   base64 = false
  // } = props

  const requestCameraPermission = async () => {
    try {
      onClose()
      const { status: existingStatus } = await ImagePicker.getCameraPermissionsAsync()
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        toast.show('Failed to get camera permission!')
        return;
      }
      launchCamera()
    } catch (err) {
      console.warn(err);
      onClose()

    }
  }

  const removeImage = async () => {
    onClose()

    // write/call api code here for remove image from server

    setImageData(null)
    setImage(null)

  }

  const pickImage = async () => {
    //to close actionsheet
    onClose()
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: allowsEditing,
      aspect: [4, 4],
      quality: 1,
      base64:base64
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      updateProfileImage(result.assets[0]);
    }

  };

  const launchCamera = async () => {
    //to close actionsheet
    onClose()
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: allowsEditing,
      aspect: [4, 4],
      quality: 1,
      base64:base64
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      updateProfileImage(result.assets[0]);
    }

  };

  const updateProfileImage = async (response) => {
    setImage(response.uri);
    let localUri = response.uri;
    let filename = localUri.split('/').pop();
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    if (base64) {
      setImageData(response.base64)
    } else {
      setImageData({ uri: localUri, name: filename, type })
    }
  }

  return <Actionsheet isOpen={isOpen} onClose={onClose}>
    <Actionsheet.Content>
      <Box w="100%" h={60} px={4} justifyContent="center">
        <Text fontSize="16" color="gray.500" _dark={{
          color: "gray.300"
        }}>
          Choose anyone
        </Text>
      </Box>
      <Actionsheet.Item onPress={requestCameraPermission} startIcon={<Icon as={MaterialIcons} size="6" name="camera" />}>Camera</Actionsheet.Item>
      <Actionsheet.Item onPress={pickImage} startIcon={<Icon as={MaterialIcons} size="6" name="perm-media" />}>Media Library</Actionsheet.Item>
      <Actionsheet.Item onPress={removeImage} startIcon={<Icon as={MaterialIcons} size="6" name="delete" />}>Remove Image</Actionsheet.Item>
      <Actionsheet.Item onPress={onClose} startIcon={<Icon as={MaterialIcons} size="6" name="close" />}>Cancel</Actionsheet.Item>
    </Actionsheet.Content>
  </Actionsheet>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: R.unit.scale(1),
    backgroundColor: R.color.gray7,
  },
});

export default ImagePickerModule;
