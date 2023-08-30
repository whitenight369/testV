import axios from "./request";
const BASE_URL = import.meta.env.VITE_ENV_BASE;

console.log("axios-BASE_URL", BASE_URL);

export const fetchData = (params: any): Promise<object> =>
  axios.post(`${BASE_URL}/test`, params);
