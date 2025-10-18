const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products?q=&maxPrice=
router.get('/', async (req, res) => {
  try {
    const { q, maxPrice } = req.query;
    const filter = {};
    if (q) filter.name = { $regex: q, $options: 'i' };
    if (maxPrice) filter.price = { $lte: Number(maxPrice) };
    const products = await Product.find(filter).sort({ price: 1 });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
