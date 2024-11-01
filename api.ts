
import axios from 'axios';
axios.defaults.baseURL = 'https://httpbin.org/get';
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => Promise.reject(err),
);
axios.interceptors.response.use(
  function (response) {
    response.data.statusCode = response.data?.status_code;
    delete response.data?.status_code;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);


export function authAgree(code: string) {
    return axios.get(`/login?code=${code}`,{});
}




