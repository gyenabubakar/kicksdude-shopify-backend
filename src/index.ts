require('dotenv').config();

import Shopify from './shopify';
import express = require('express');
import type { OrderEdit } from './types';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/webhook/oder/update', async (req, res) => {
  const payload = req.body as OrderEdit;
  console.log(payload);
  const response = await Shopify.rest.Orders.all({
    ids: [payload.order_edit.order_id],
  });
  console.log(response);
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`👉👉👉Server is running in http://localhost:${PORT}`);
});
