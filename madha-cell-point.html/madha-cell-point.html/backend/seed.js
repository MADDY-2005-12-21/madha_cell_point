require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {name: 'Samsung Galaxy S24 Ultra 5G', price:129999},
  {name: 'Samsung Galaxy A55 5G', price:36999},
  {name: 'Samsung Galaxy F15 5G', price:14999},
  {name: 'Realme Narzo N65 5G', price:13999},
  {name: 'Realme 12 Pro+ 5G', price:29999},
  {name: 'Vivo V30 5G', price:31999},
  {name: 'Vivo Y200e 5G', price:18999},
  {name: 'OPPO Reno 12 Pro 5G', price:45999},
  {name: 'POCO F6 5G', price:29999},
  {name: 'OnePlus 12 5G', price:64999},
  {name: 'Apple iPhone 16 Pro', price:159900},
  {name: 'Dell Inspiron 14 2024 Ryzen 7', price:67990},
  {name: 'Apple MacBook Air M3 (2024)', price:134900}
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded products');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
