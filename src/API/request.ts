import AXIOS from './axios';

export const launches = {
  latest: (): Promise<any> =>
    AXIOS.get('/launches/latest').then((res) => res.data),
  list: (): Promise<any[]> => AXIOS.get('/launches').then((res) => res.data),
};
export const rockets = {
  list: (): Promise<any[]> => AXIOS.get('/rockets').then((res) => res.data),
};
