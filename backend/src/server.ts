import dotenv from 'dotenv';
import express from 'express';
import verify from './utils';
import connectDB from './config/db';
import products from './data/products';

dotenv.config({ path: '../.env' });
connectDB();
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

const PORT = process.env.PORT || 5000;

app.listen(PORT);
