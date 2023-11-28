import { showMessage } from 'react-native-flash-message';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const show = (
  title,
  message,
  type,//'info' | 'danger' | 'success' | 'warning' | 'default'
) => {
  showMessage({
    message: title ? title : '',
    description: message,
    type: type,
    hideStatusBar: true,
    duration: 2000,
    autoHide: true,
  });
};

export default {
  show,
};
