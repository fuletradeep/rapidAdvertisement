import moment from "moment"
import DeviceInfo from 'react-native-device-info';

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const checkDecimal = (num = 0) => {
  return num % 1 != 0;
}

export const validateEmail = (str) => {
  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(str);
}
export const validatePhonenumber = (str) => {
  var pattern = /(0|91)?[7-9][0-9]{9}/;
  return pattern.test(str);
}

export const splitNameInitial = (text = "User") => {
  if (!text) text = "User"
  let splittedName = text.split(' ')[0][0]
  if (text.split(' ').length > 1) {
    splittedName = splittedName + (text.split(' ')[1][0] || '')
  }
  return splittedName;
}

export const firstLetterCapital = (text) => {
  if (text) {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
  }
  return "";
};

export const getDeviceInfo = () => {
  return DeviceInfo
}

export const getutcdate = () => {
  return moment().utc();
}

export const getdatetime = (date) => {
  if (!date) return '-'
  var d = new Date(date);
  return moment(d).format("D-MM-YYYY h:mm a");
}

export const getCurrentfulldateByFormat = (format = "yyyy-MM-DD HH:mm:ss") => {
  var d = new Date();
  return moment(d).format(format);
}

export const getCustomDate = (date, format = "yyyy-MM-DD HH:mm:ss") => {
  if (!date) return '-'
  var d = new Date(date);
  return moment(d).format(format);
}

// export const getformatedate = (date) => {
//   if (!date) return '-'
//   var d = new Date(date);
//   return moment(d).format("D MMM, YYYY");
// }

export const currencyFormat = (num) => {
  return '$' + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getEncodedParamString = (obj) => {
  var str = "";
  for (var key in obj) {
    if (str != "") {
      str += "&";
    }
    str += key + "=" + obj[key];
  }
  return str
}

export const isEmpty = (data) => {
  if (
    data !== null &&
    data !== '' &&
    data !== undefined &&
    data !== 'undefined' &&
    data !== 'null' &&
    data !== 0 &&
    data !== '0' &&
    data?.length !== 0
  ) {
    return false;
  }
  return true;
};
