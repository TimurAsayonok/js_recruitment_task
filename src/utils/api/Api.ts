// import { ResponsesCache } from '/utils/Storage';
import { ApiMethodType } from '../interfaces/api';
import { async } from 'q';
// we need cors for our requests
const CORS = 'https://cors-anywhere.herokuapp.com/';
// api url
const BASE_URL = 'https://content.guardianapis.com';
// api key for api url
const API_KEY = '7e15c8f7-9e71-44e2-930e-c6e0f681040a';
// default props for request
const defaultParams = {
  'api-key': API_KEY
};

const parseParamsToString = (requestParams: object) => {
  const params = {
    ...defaultParams,
    ...requestParams,
  };

  const paramsString = Object.keys(params).reduce((prevValue, currentKeyOfParam, index, array) => {
    const paramValueBykey = params[currentKeyOfParam];
    const reqKeyValue = `&${currentKeyOfParam}=${paramValueBykey}`;

    return prevValue === ''
      ? `?${reqKeyValue}`
      : `${prevValue}${reqKeyValue}`
  }, '');

  return paramsString;
};

const parseResponse = async (response: any) => {
  if (response.headers.get('Content-Type') === 'application/json') {
    const parsedResponse = await response.json();
    const responseData = parsedResponse.response;

    return responseData;
  }
};

const parseError = async (response: any) => {
  let errorBody = null;
  if (response.headers.get('Content-Type') === 'application/json') {
    errorBody = await response.json();
  } else {
    errorBody = await response.text();
  }
  const error = new Error(response.statusText);
  error.statusCode = response.status;
  error.data = errorBody;

  return error;
}

const requestMethod = async (methodType, endpoint, methodParams, methodConfig) => {
  const params = parseParamsToString(methodParams);
  const url = `${CORS}${BASE_URL}${endpoint}${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    const error = await parseError(response);
    throw error;
  } else {
    const responseData = await parseResponse(response);

    return responseData;
  }
}

export const Api = {
  get: ({
    endpoint,
    params,
    config,
  }: ApiMethodType) => requestMethod('GET', endpoint, params, config),
  post: ({
    endpoint,
    params,
    config,
  }: ApiMethodType) => requestMethod('POST', endpoint, params, config),
  put: ({
    endpoint,
    params,
    config,
  }: ApiMethodType) => requestMethod('PUT', endpoint, params, config),
  delete: ({
    endpoint,
    params,
    config,
  }: ApiMethodType) => requestMethod('DELETE', endpoint, params, config),
};
