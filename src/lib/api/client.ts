import axios from "axios";

export const client = axios.create({
  baseURL: 'http://54.180.162.216:8084',
});

