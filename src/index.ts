require('dotenv').config();

import express = require('express');
import bodyParser from 'body-parser';
import type { OrderEdit } from './types';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.raw({ type: 'application/json' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook/oder/update', async (req, res) => {
  const payload = JSON.parse(req.body.toString()) as OrderEdit;
  // const order = await ShopifyAPI.getOrder(payload.order_edit.order_id, [
  //   'id',
  //   'line_items',
  //   'shipping_lines',
  // ]);
  console.log(payload);
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`👉👉👉Server is running in http://localhost:${PORT}`);
});
