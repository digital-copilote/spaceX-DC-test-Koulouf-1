import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',

  withCredentials: false,
});

export default AXIOS;
