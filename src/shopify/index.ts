import '@shopify/shopify-api/adapters/node';
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, HOST } = process.env as Record<string, string>;

const Shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: SHOPIFY_API_KEY,
  apiSecretKey: SHOPIFY_API_SECRET,
  hostName: HOST,
  scopes: ['read_products', 'write_products'],
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export default Shopify;
