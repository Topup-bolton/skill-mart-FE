import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8081/" ,
  timeout: 180000,
  headers: {
  },
});

export default AxiosInstance;
