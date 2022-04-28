import axios from 'axios';

export const BaseInstance = axios.create({
  baseURL: process.env.WEBSERVICE_URL,
});
