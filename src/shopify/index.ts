import axios from 'axios';
import type { Order } from '../types';
const LATEST_API_VERSION = '2023-04';

axios.defaults.baseURL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${LATEST_API_VERSION}/`;
axios.defaults.headers.common['X-Shopify-Access-Token'] = process.env.SHOPIFY_API_ACCESS_TOKEN;

async function getOrder(id: number, fields: string[] = []) {
  const response = await axios.get(`orders/${id}.json`, {
    params: {
      fields: fields.join(','),
      status: 'any',
    },
  });
  return response.data.order as Partial<Order>;
}

const ShopifyAPI = {
  getOrder,
};

export default ShopifyAPI;
