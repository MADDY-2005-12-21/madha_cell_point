const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: 'mobile' },
  image: { type: String, default: '' }
});

module.exports = mongoose.model('Product', ProductSchema);
