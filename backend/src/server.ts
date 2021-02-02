import express from 'express';
import { allowedNodeEnvironmentFlags } from 'process';
import verify from './utils';
import products from './data/products';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = verify(products.find((p) => p.id === req.params.id));
  res.json(product);
});
app.listen(5000);
