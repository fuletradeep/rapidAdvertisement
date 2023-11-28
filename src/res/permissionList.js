import { PERMISSIONS } from 'react-native-permissions';

export const permissionsList = [
  // {
  //   type: 'location',
  //   IOS: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  //   ANDROID: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  // },
  {
    type: 'camera',
    IOS: PERMISSIONS.IOS.CAMERA,
    ANDROID: PERMISSIONS.ANDROID.CAMERA,
  },
  {
    type: 'phone',
    IOS: '',
    ANDROID: '',
  },
  {
    type: 'contacts',
    IOS: PERMISSIONS.IOS.CONTACTS,
    ANDROID: PERMISSIONS.ANDROID.READ_CONTACTS,
  },
  {
    type: 'storage',
    IOS: PERMISSIONS.IOS.PHOTO_LIBRARY,
    ANDROID: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  },
];
