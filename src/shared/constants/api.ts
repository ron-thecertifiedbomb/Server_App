export const API_REQUEST_HEADERS = {
  Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  'Content-Type': 'application/json',
  'x-idempotence-key': 'dad2sa',
  'platform-type': 'sddd',
  'app-version': '1',
  'os-version': '2',
  'device-model': 'apple',
  'device-id': 'guest',
  'user-name': 'guest',
};

export const API_CODE = {
  STATUS_200: 200,
  STATUS_201: 201,
  STATUS_400: 400,
  STATUS_401: 401,
  STATUS_404: 404,
};

export const REGISTER_ERROR_RESPONSE = {
  MOBILE_NOT_AVAILABLE: 'Phone number already registered',
  EMAIL_NOT_AVAILABLE: 'Email address already registered',
};


export const ENV_URL = {
  DEV_URL: 'https://qa.stuff.com.ph/',
  QA_URL: 'https://qa.stuff.com.ph/',
  UAT_URL: 'https://uat.stuff.com.ph/',
  PROD_URL: 'https://uat.stuff.com.ph/'
}

export const BASE_URL_ENV = {
  BASEURL_DEV: 'https://devgateway.eshop2drop.com/api/',
  BASEURL_QA: 'https://qagateway.eshop2drop.com/api/',
  BASEURL_UAT: 'https://api.eshop2drop.com/api/',
  BASEURL_PROD: ''
}