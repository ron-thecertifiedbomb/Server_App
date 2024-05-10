/* eslint-disable import/no-anonymous-default-export */
import { SearchParams } from '@/shared/interfaces';

import Api from './Api.service';

const appPolicyApi = (data: any) => {
  return Api.get('termsandconditions/policy/get-all-policies-for-mobile', data);
};

const homeApi = (data: any) => {
  return Api.get('product/home-page', data);
};

const loginApi = (data: any) => {
  return Api.post('user-login', data);
};

const productDetailsApi = (data: any) => {
  return Api.get(`product/product-details/${data.productId}?username=${data.username}`, data);
};

const searchApi = (data: SearchParams) => {
  return Api.post(`search/consumer-web`, data)
}

const registerApi = (data: any) => {
  return Api.post('register', data);
};

const resendOTPApi = (data: any) => {
  return Api.post('code/resend', data);
};

const verifyApi = (data: any) => {
  return Api.patch('verify', data);
};

const categoriesApi = (data: any) => {
  return Api.get(`product/getallcategories/searchpage/sidebar`, data)
}

export default {
  appPolicyApi,
  homeApi,
  searchApi,
  loginApi,
  productDetailsApi,
  registerApi,
  resendOTPApi,
  verifyApi,
  categoriesApi
};
