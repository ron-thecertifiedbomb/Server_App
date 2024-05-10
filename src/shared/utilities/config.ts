import { BASE_URL_ENV, ENV_URL } from "../constants";

export const config = (baseUrl: string) => {
  switch (baseUrl) {
    case BASE_URL_ENV.BASEURL_DEV:
      return ENV_URL.DEV_URL;
    case BASE_URL_ENV.BASEURL_QA:
      return ENV_URL.QA_URL;
    case BASE_URL_ENV.BASEURL_UAT:
      return ENV_URL.UAT_URL;
    case BASE_URL_ENV.BASEURL_PROD:
      return ENV_URL.PROD_URL;
    default:
      throw new Error(`Unsupported baseUrl: ${baseUrl}`);
  }
};