import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8081/" ,
  // baseURL: 'https://apidevinternal.onsys.com.au/',
  // baseURL: 'http://localhost:8080',
  timeout: 180000,
  headers: {
  },
});

export default AxiosInstance;
