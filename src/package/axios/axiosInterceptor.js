import _get from 'lodash.get';
import toastService from '@app/util/toast';
import apiClient, { axiosMD } from './axios';
import { store } from '@app/store';
// import { logout } from '@app/store/auth/authSlice';
// import store from '@app/store';

const axiosInterceptor = (dispatch) => {
  //request interceptors
  function commonRequest(request, enableMultiPart) {
    try {
      if (enableMultiPart) {
        request.headers['Content-Type'] = 'multipart/form-data';
      }
      // const authToken = store.getState().auth.authToken?.token;
      // const authToken = store.getState().auth.authToken;
      const authToken = store.getState().auth?.authToken;
      // console.log("request",request);
      if (!authToken) {
        return request;
      }
      request.headers['Authorization'] = `Bearer ${authToken}`;
    } catch (ex) { }
    return request;
  }

  async function commonResponse(response) {
    if (!response) {
      //show alert
      return;
    }

    // console.log("response=>", response);

    // set message to toast service
    if (response.data && response.data.code == -1) {
      toastService.show(response.data.message);
    }

    //got response success
    if (response.status == 400) {
      // TODO: Add handling for bad request
    }

    // logout functionality on invalid function
    if (response.status == 200 && response?.data?.responseCode == 103) {
      console.log("loging out...");
      // dispatch(logout())
      // navigate(AppStackC.HOME_SCREEN, { isLogOut: true })
      // stackFirst(AppStackC.HOME_SCREEN, { isLogOut: true })
    }

    // logout for DCA
    if (response.status == 401) {
      //logout functionality need to written
      // setTimeout(() => {
      //   NavigationService.navigate(NavigationStackC.AUTH_STACK);
      // }, 2000);
      // dispatch(logout())
      // return;
    }

    //got response success
    if (response.data.status !== 1) {
      // TODO: Add handling for invalid response
    }
  }

  function showToast(response) {
    if (
      response.data &&
      response.data.isError === 1 &&
      typeof response.data.message == "string"
    ) {
      toastService.show('Alert', response.data.message, 'danger');
    } 
    // else if (
    //   response.data &&
    //   typeof response.data.message == "string"
    // ) {
    //   toastService.show('Alert', response.data.message, 'danger');
    // }
  }

  apiClient.interceptors.request.use(async (request) => {
    //show loader
    //showLoader(request);
    request = await commonRequest(request);
    return request;
  });

  // Enable Multipart Data data format
  axiosMD.interceptors.request.use(async (request) => {
    console.log("multipart");
    request = await commonRequest(request, true);
    return request;
  });

  //response interceptors
  apiClient.interceptors.response.use(
    (response) => {
      // console.log("responce====>");
      if (!response.data) {
        return response;
      }
      //hide loader
      commonResponse(response);

      //show toast
      showToast(response);

      // Do something with response data
      return _get(response, 'data', {});
    },
    (error) => {
      console.log('Api Error axios interceptor', { error });
      //hide loader
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    }
  );

  axiosMD.interceptors.response.use(
    (response) => {
      if (!response.data) {
        return response;
      }
      //hide loader
      commonResponse(response);

      //show toast
      showToast(response);

      // Do something with response data
      return _get(response, 'data', {});
    },
    (error) => {
      // console.log("error ===", error, error?.response);
      // console.log("error ===", error, error?.response?.status);

      console.log('Api Error axios interceptor', { error });
      //hide loader
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    }
  );

};

export default axiosInterceptor;
