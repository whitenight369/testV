import Axios from "axios";

const axios = Axios.create();
/**
 * @desc 错误处理
 */
function handleErr(err: any) {
  return Promise.reject(err);
}

axios.interceptors.request.use(function (request) {
  return request;
}, handleErr);

axios.interceptors.response.use(function (response) {
  return response;
}, handleErr);

export default axios;
