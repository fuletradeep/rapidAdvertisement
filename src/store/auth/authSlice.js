import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient, { axiosMD } from '@app/package/axios/axios';

export const signIn = createAsyncThunk('auth/signIn', async (data) => {
  try {
    console.log(' Log input auth/signIn body ', data);
    const response = await apiClient.post('/login', data);
    return response;
  } catch (err) {
    console.log(' auth/signIn error ', err);
    return {
      error: true,
      message: 'Unable to signIn. Please try again' + `\n${err.toString()}`,
    };
  }
});

const initialState = {
  isAuthenticated: false,
  isLoadingRequest: false,
  requestLoader: '',
  user: undefined,
  status: 'idle',
  error: undefined,
  authToken: '',
  countDownTime: 0,
  isNewUser: false,
  justLogin: false,
  lat: 0,
  long: 0,
  scannerType: 'qr'//qr, bluetooth, manually
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    setStaticUser(state) {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.isLoadingRequest = false;
      state.requestLoader = 'login';
      state.user = undefined;
      state.authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDZW50cmFsVXNlcklkIjoiMTY5ODAxIiwiRmlyc3ROYW1lIjoiSGFyc2hpbCIsIkxhc3ROYW1lIjoiTWFkaHUiLCJFbWFpbCI6ImhhcnNoaWwubWFkaHVAc2l5YWluZm8uY29tIiwibmJmIjoxNjkzNTYyMjg5LCJleHAiOjIwMDkxODE0ODksImlhdCI6MTY5MzU2MjI4OSwiaXNzIjoibG9jYWxob3N0IiwiYXVkIjoibG9jYWxob3N0In0.DdP6JNFgtcRBt5C-WAWOOaiPpAgmqxi-Z7Q8wFydExs";
      state.justLogin = true;
      state.error = undefined;
    },
    reset(state) {
      state.status = 'idle';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.error = undefined;
      state.authToken = '';
      state.user = undefined;
      state.requestLoader = '';
    },
    logout(state) {
      state.status = 'idle';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.error = undefined;
      state.authToken = '';
      state.user = undefined;
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
    setScannerType(state, action) {
      state.scannerType = action.payload;
    },
    default : initialState
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = 'loading';
      state.isAuthenticated = false;
      state.isLoadingRequest = true;
      state.requestLoader = 'login';
      state.error = undefined;
      state.user = undefined;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log("=====>>>", action.payload);
      if (action.payload.isError === 0) {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.isLoadingRequest = false;
        state.requestLoader = 'login';
        state.user = action.payload.data;
        state.authToken = action.payload.meta;
        state.justLogin = true;
        state.error = undefined;
      } else {
        state.status = 'failed';
        state.isAuthenticated = false;
        state.isLoadingRequest = false;
        state.requestLoader = 'login';
        state.user = undefined;
        state.authToken = '';
        state.justLogin = false;
        state.error = action.payload?.message;
      }
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'failed';
      state.isAuthenticated = false;
      state.isLoadingRequest = false;
      state.requestLoader = 'login';
      state.user = undefined;
      state.authToken = '';
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
  setScannerType
} = authSlice.actions;

export default authSlice.reducer;
