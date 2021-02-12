import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users';
import products from './data/products';
import User from './models/userModel';
import Product from './models/productModel';
import Order from './models/orderModel';
import connectDB from './config/db';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const usersDocument = mongoose.Document(users);
    await User.insertMany();
  } catch (error) {}
};

const helloWorld = () => {
  console.log('Hello World!');
};

helloWorld();
