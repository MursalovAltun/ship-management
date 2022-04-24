import { AxiosInstance } from 'axios';
import { Configuration } from './api-client';
import shipManagementApiClient from './ship-management-client';

// eslint-disable-next-line no-unused-vars
export const createShipManagementApiClient = <T>(service: {
  new (configuration?: Configuration, basePath?: string, axios?: AxiosInstance): T;
}): T => {
  // eslint-disable-next-line new-cap
  return new service(undefined, process.env.REACT_APP_CPP_BACKEND_URL, shipManagementApiClient) as T;
};
