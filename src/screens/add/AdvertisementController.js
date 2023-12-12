import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AdvertisementView from "./AdvertisementView";
import { useAdvertisementModel } from "./AdvertisementModel";
// import CryptoJS from "react-native-crypto-js";
// import CryptoJS from 'crypto-js';
import { useSelector } from "react-redux";
import StoreSelectScreen from "../store_selection/StoreSelectScreen";
import NetInfo from "@react-native-community/netinfo";
import DeviceInfo from 'react-native-device-info';
import { getOfflineAdvertisement } from "@app/store/advertisement/advertisementSlice";
// global.Buffer = require("buffer").Buffer;

//   const ValidChars = "QAZ2WSX3" + "EDC4RFV5" + "TGB6YHN7" + "UJM8K9LP";
//   const passPhrase = "epsARpr@se";        // can be any string
//   const saltValue = "E#1tValue";        // can be any string
//   const hashAlgorithm = "MD5";             // can be "MD5"
//   const passwordIterations = 2;                  // can be any number
//   const initVector = "@6S2c3D4e8F6g7L8"; // must be 16 bytes
//   const keySize = 256;
//   const UserAz = "user";
//   const ItemAz = "item";
//   const DepartMentAz = "department";
//   const SubDepartMentAz = "subdepartment";

const AdvertisementController = (props) => {
  const { getAddvertisement, onLogoutPress } = useAdvertisementModel();
  const auth = useSelector((state) => state.auth);

  console.log("auth", auth?.user?.store, auth?.store?.length);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Is connected?", state.isConnected);
      if (state.isConnected == true) {
        getAddvertisement(true);
        let interval = setInterval(() => {
          getAddvertisement(true);
        }, 60 * 30 * 1000);
        return () => {
          clearInterval(interval);
        };
      } else {
        console.log('ooooooooooooooo')
        getAddvertisement(false)
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  DeviceInfo.getUniqueId().then((uniqueId) => {
    console.log('----unique----',uniqueId)
    // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
    // Android: "dd96dec43fb81c97"
    // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"
    });


  // const DecryptSHA = (cipherText) => {
  //   try {
  //     const initVectorBytes = Buffer.from(initVector, 'ascii');
  //     const saltValueBytes = Buffer.from(saltValue, 'ascii');
  
  //     // Convert the cipher text into a byte array.
  //     const cipherTextBytes = FromBase32String(cipherText);
  
  //     // Create the password, from which the key will be derived.
  //     const password = CryptoJS.PBKDF2(passPhrase, saltValueBytes, {
  //       keySize: keySize / 8, // keySize is in words, and each word is 4 bytes
  //       iterations: passwordIterations,
  //       hasher: CryptoJS.algo.SHA256,
  //     });
  
  //     // Use the password to generate the encryption key.
  //     const keyBytes = CryptoJS.lib.WordArray.create(password.words.slice(0, keySize / 8));
  
  //     // Create an uninitialized Rijndael encryption object.
  //     const decipher = CryptoJS.algo.AES.createDecryptor(keyBytes, { iv: initVectorBytes });
  
  //     // Decrypt the data.
  //     const decrypted = decipher.finalize(cipherTextBytes).toString(CryptoJS.enc.Utf8);
  
  //     // Return decrypted string.
  //     return decrypted;
  //   } catch (error) {
  //     console.log('KEY ERROR_____',error);
  //     return cipherText;
  //   }
  // };

  // const FromBase32String = (str) => {
  //   const numBytes = (str.length * 5) / 8;
  //   const bytes = new Uint8Array(numBytes);

  //   // all UPPERCASE chars
  //   str = str.toUpperCase();

  //   let bitBuffer;
  //   let currentCharIndex;
  //   let bitsInBuffer;

  //   if (str.length < 3) {
  //     bytes[0] = ValidChars.indexOf(str[0]) | (ValidChars.indexOf(str[1]) << 5);
  //     return bytes;
  //   }

  //   bitBuffer = ValidChars.indexOf(str[0]) | (ValidChars.indexOf(str[1]) << 5);
  //   bitsInBuffer = 10;
  //   currentCharIndex = 2;
  //   for (let i = 0; i < bytes.length; i++) {
  //     bytes[i] = bitBuffer;
  //     bitBuffer >>= 8;
  //     bitsInBuffer -= 8;
  //     while (bitsInBuffer < 8 && currentCharIndex < str.length) {
  //       bitBuffer |= ValidChars.indexOf(str[currentCharIndex++]) << bitsInBuffer;
  //       bitsInBuffer += 5;
  //     }
  //   }

  //   return bytes;
  // }

  // console.log('-----',DecryptSHA('5TJB9TEKVMB3RDC639DUTVRW6S'))

  return (
    <>
      {auth?.user?.store?.length > 1 ? (
        <StoreSelectScreen />
      ) : (
        <AdvertisementView onLogoutPress={onLogoutPress} />
      )}
    </>
  );
};

export default AdvertisementController;
