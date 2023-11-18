const BASE_URL = 'http://54.180.144.39:8080';
const API_VERSION = '/api/v1';

const API_URL = Object.freeze({
  DIARY: `${BASE_URL}${API_VERSION}/diary`,
  POST_DIARY: `${BASE_URL}${API_VERSION}/diary/new`,
  GET_WEATHER: `${BASE_URL}${API_VERSION}/record/weather`,
  GET_RECORD_SKY: `${BASE_URL}${API_VERSION}/record/sky`,
  GET_RECORD_EMOTION: `${BASE_URL}${API_VERSION}/record/emotion`,
  GET_MAIN: `${BASE_URL}${API_VERSION}/main`,
  GET_INFO: `${BASE_URL}${API_VERSION}/mypage`,
});

export default API_URL;
