import axios from 'axios';

const AXIOS = axios.create({
  // baseURL: Api Url goes here
  withCredentials: false,
});

export default AXIOS;
