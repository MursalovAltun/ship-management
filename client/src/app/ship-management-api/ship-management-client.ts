import { AnyAction } from '@reduxjs/toolkit';
import { LayoutActions } from '@store/actions';
import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';

const shipManagementApiClient = axios.create({
  baseURL: process.env.REACT_APP_CPP_BACKEND_URL,
});

export const setupShipManagementApiClientInterceptors = (dispatch: Dispatch<AnyAction>) => {
  shipManagementApiClient.interceptors.request.use(
    async (request) => {
      dispatch(LayoutActions.toggleLoading());

      return request;
    },
    (error) => {
      dispatch(LayoutActions.toggleLoading());

      throw error;
    }
  );

  shipManagementApiClient.interceptors.response.use(
    (response) => {
      dispatch(LayoutActions.toggleLoading());

      return response;
    },
    (error: AxiosError) => {
      dispatch(LayoutActions.toggleLoading());

      throw error;
    }
  );
};

export default shipManagementApiClient;
