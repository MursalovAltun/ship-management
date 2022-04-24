/* tslint:disable */
/* eslint-disable */
/**
 * Ship Management
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateShipDto
 */
export interface CreateShipDto {
    /**
     * 
     * @type {string}
     * @memberof CreateShipDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateShipDto
     */
    'length'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateShipDto
     */
    'width'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateShipDto
     */
    'code'?: string | null;
}
/**
 * 
 * @export
 * @interface ShipResponseDto
 */
export interface ShipResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ShipResponseDto
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ShipResponseDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ShipResponseDto
     */
    'length'?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipResponseDto
     */
    'width'?: number;
    /**
     * 
     * @type {string}
     * @memberof ShipResponseDto
     */
    'code'?: string | null;
}
/**
 * 
 * @export
 * @interface ShipResponseDtoPaginatedList
 */
export interface ShipResponseDtoPaginatedList {
    /**
     * 
     * @type {Array<ShipResponseDto>}
     * @memberof ShipResponseDtoPaginatedList
     */
    'items'?: Array<ShipResponseDto> | null;
    /**
     * 
     * @type {number}
     * @memberof ShipResponseDtoPaginatedList
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipResponseDtoPaginatedList
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof ShipResponseDtoPaginatedList
     */
    'totalCount'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ShipResponseDtoPaginatedList
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ShipResponseDtoPaginatedList
     */
    'hasNextPage'?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateShipDto
 */
export interface UpdateShipDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateShipDto
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateShipDto
     */
    'length'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateShipDto
     */
    'width'?: number;
}

/**
 * ShipsApi - axios parameter creator
 * @export
 */
export const ShipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsGet: async (pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Ships`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiShipsIdDelete', 'id', id)
            const localVarPath = `/api/Ships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiShipsIdGet', 'id', id)
            const localVarPath = `/api/Ships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateShipDto} [updateShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdPut: async (id: string, updateShipDto?: UpdateShipDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiShipsIdPut', 'id', id)
            const localVarPath = `/api/Ships/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateShipDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateShipDto} [createShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsPost: async (createShipDto?: CreateShipDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Ships`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createShipDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShipsApi - functional programming interface
 * @export
 */
export const ShipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShipsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiShipsGet(pageNumber?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShipResponseDtoPaginatedList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiShipsGet(pageNumber, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiShipsIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiShipsIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiShipsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShipResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiShipsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateShipDto} [updateShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiShipsIdPut(id: string, updateShipDto?: UpdateShipDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShipResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiShipsIdPut(id, updateShipDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateShipDto} [createShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiShipsPost(createShipDto?: CreateShipDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShipResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiShipsPost(createShipDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShipsApi - factory interface
 * @export
 */
export const ShipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShipsApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsGet(pageNumber?: number, pageSize?: number, options?: any): AxiosPromise<ShipResponseDtoPaginatedList> {
            return localVarFp.apiShipsGet(pageNumber, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiShipsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdGet(id: string, options?: any): AxiosPromise<ShipResponseDto> {
            return localVarFp.apiShipsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateShipDto} [updateShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsIdPut(id: string, updateShipDto?: UpdateShipDto, options?: any): AxiosPromise<ShipResponseDto> {
            return localVarFp.apiShipsIdPut(id, updateShipDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateShipDto} [createShipDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiShipsPost(createShipDto?: CreateShipDto, options?: any): AxiosPromise<ShipResponseDto> {
            return localVarFp.apiShipsPost(createShipDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShipsApi - object-oriented interface
 * @export
 * @class ShipsApi
 * @extends {BaseAPI}
 */
export class ShipsApi extends BaseAPI {
    /**
     * 
     * @param {number} [pageNumber] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipsApi
     */
    public apiShipsGet(pageNumber?: number, pageSize?: number, options?: AxiosRequestConfig) {
        return ShipsApiFp(this.configuration).apiShipsGet(pageNumber, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipsApi
     */
    public apiShipsIdDelete(id: string, options?: AxiosRequestConfig) {
        return ShipsApiFp(this.configuration).apiShipsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipsApi
     */
    public apiShipsIdGet(id: string, options?: AxiosRequestConfig) {
        return ShipsApiFp(this.configuration).apiShipsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {UpdateShipDto} [updateShipDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipsApi
     */
    public apiShipsIdPut(id: string, updateShipDto?: UpdateShipDto, options?: AxiosRequestConfig) {
        return ShipsApiFp(this.configuration).apiShipsIdPut(id, updateShipDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateShipDto} [createShipDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipsApi
     */
    public apiShipsPost(createShipDto?: CreateShipDto, options?: AxiosRequestConfig) {
        return ShipsApiFp(this.configuration).apiShipsPost(createShipDto, options).then((request) => request(this.axios, this.basePath));
    }
}

