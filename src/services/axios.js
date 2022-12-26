import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1/`,
});
