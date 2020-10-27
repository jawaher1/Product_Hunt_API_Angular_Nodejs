import { environment } from '@env/environment.ts';
const BASE_API_URL = `${environment.host}:${environment.port}/`;

export const URLSConfigs = {
  BASE_URL: BASE_API_URL,
  GET_PRODUCTS: BASE_API_URL + 'api/allproducts',
};
