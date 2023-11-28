import _get from 'lodash.get';
import toastService from '@app/util/toast';
import axios, { axiosMD } from './axios';
import store from '@app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { logout } from '@app/store/auth/authSlice';

export default function useAxiosInterceptor() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const { authToken } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  //request interceptors
  function commonRequest(request, enableMultiPart) {
    try {
      if (enableMultiPart) {
        request.headers['Content-Type'] = 'multipart/form-data';
      }
      // const authToken = store.getState().auth.authToken?.token;
      // const authToken = store.getState().auth.data?.session_token;
      // console.log("request",request);
      console.log("authToken",auth);
      // if (!authToken) {
      //   return request;
      // }
      // request.headers['Authorization'] = `Bearer ${authToken}`;
      // request.headers['token'] = `${authToken}`;

    } catch (ex) { }
    return request;
  }

  async function commonResponse(response) {
    if (!response) {
      //show alert
      return;
    }

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
      console.log(response);
      dispatch(logout())
    }

    if (response.status == 401) {
      //logout functionality need to written
      // setTimeout(() => {
      //   NavigationService.navigate(NavigationStackC.AUTH_STACK);
      // }, 2000);
      return;
    }

    //got response success
    if (response.data.status !== 1) {
      // TODO: Add handling for invalid response
    }
  }

  function showToast(response) {
    if (response.data && response.data.message) {
      toastService.show(response.data.message);
    } else if (
      response.data &&
      // response.data.code === 200 &&
      response.data.response &&
      response.data.response.detail
    ) {
      toastService.show(response.data.response.detail);
    } else if (
      response.data &&
      // response.data.code === 200 &&
      response.data.response &&
      response.data.response.constructor == String
    ) {
      toastService.show(response.data.response);
    } else if (
      response.data &&
      response.data.res &&
      // response.data.res.code === 200 &&
      response.data.res.response &&
      response.data.res.response.detail
    ) {
      toastService.show(response.data.res.response.detail);
    } else if (
      response.data &&
      response.data.res &&
      // response.data.res.code === 200 &&
      response.data.res.response &&
      response.data.res.response.constructor == String
    ) {
      toastService.show(response.data.res.response.detail);
    }
  }

  useEffect(() => {
    const initActionOfTokenExpired = () => {


      axios.interceptors.request.use(async (request) => {
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
      axios.interceptors.response.use(
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

      setLoadingComplete(true);
    };
    initActionOfTokenExpired();
  }, []);

  return isLoadingComplete;

};

