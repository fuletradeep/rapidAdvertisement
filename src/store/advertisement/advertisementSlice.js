import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import axios from "axios";
import { demo } from "@app/res/video";
import R from "@app/res/R";

export const getAdvertisementList = createAsyncThunk(
  "advertisement/getAdvertisementList",
  async (encryptedKey) => {
    try {
      let data = {
        Type: "RCD",
      };
      const headers = {
        "DBName-Header": encryptedKey,
      };
      const response = await axios.post(
        "http://rapidlockdown.com/WcfService/Service.svc/DiviceAdsInfo",
        data,
        {
          headers: headers,
        }
      );
      return {
        isError: 0,
        data: JSON.parse(response?.data?.DiviceAdsInfoResult?.Data),
      };
    } catch (err) {
      console.log(" advertisement/getAdvertisementList error ", err);
      return {
        error: true,
        message:
          "Unable to getAdvertisementList. Please try again" +
          `\n${err.toString()}`,
      };
    }
  }
);

const initialState = {
  isLoadingRequest: false,
  requestLoader: "",
  advertisementList: [],
  originalDbName: "",
  status: "idle",
  error: undefined,
  countDownTime: 0,
  isNewUser: false,
  justLogin: false,
  lat: 0,
  long: 0,
  scannerType: "qr", //qr, bluetooth, manually
};

const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    setStaticUser(state) {
      state.status = "succeeded";
      state.isLoadingRequest = false;
      state.requestLoader = "advertisement";
      state.advertisementList = undefined;
      state.error = undefined;
    },
    reset(state) {
      state.status = "idle";
      state.isLoadingRequest = false;
      state.error = undefined;
      state.advertisementList = undefined;
      state.requestLoader = "";
    },
    logout(state) {
      state.status = "idle";
      state.isLoadingRequest = false;
      state.error = undefined;
      state.advertisementList = undefined;
    },
    resetCountDownTimer(state) {
      state.countDownTime = 0;
    },
    updateJustLoginState(state, action) {
      state.justLogin = action.payload;
    },
    updateGPSLocation(state, action) {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
    getOfflineAdvertisement(state, action) {
      console.log('xxxxxxxxxxxxxx')
      state.advertisementList = {
        advertisementList: [
          {
            AdId: 20197,
            AdsImage: R.video.demo(),
            DefualtHalfURL: null,
            EndDate: "/Date(1701648000000)/",
            ImageType: "Video",
            IsDeleted: false,
            ItemName: "",
            Rotation: 120,
            StartDate: "/Date(1701648000000)/",
            Tag: null,
            TimeStatus: "Continuously",
            UPC: null,
            isVerified: false,
          },
        ],
        countDownTime: 0,
        error: undefined,
        isLoadingRequest: false,
        isNewUser: false,
        justLogin: true,
        lat: 0,
        long: 0,
        originalDbName: "",
        requestLoader: "advertisement",
        scannerType: "qr",
        status: "succeeded",
      };
    },

    default: initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAdvertisementList.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "advertisement";
      state.error = undefined;
      state.advertisementList = undefined;
    });
    builder.addCase(getAdvertisementList.fulfilled, (state, action) => {
      console.log("=====>>>", action.payload);
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "advertisement";
        state.advertisementList = action.payload.data;
        state.justLogin = true;
        state.error = undefined;
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "advertisement";
        state.advertisementList = undefined;
        state.justLogin = false;
        state.error = action.payload?.message;
      }
    });
    builder.addCase(getAdvertisementList.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "advertisement";
      state.advertisementList = undefined;
      state.justLogin = false;
      const { error } = action;
      state.error = error;
    });
  },
});
export const {
  clearError,
  setStaticUser,
  reset,
  logout,
  resetCountDownTimer,
  updateJustLoginState,
  updateGPSLocation,
  getOfflineAdvertisement,
} = advertisementSlice.actions;

export default advertisementSlice.reducer;
