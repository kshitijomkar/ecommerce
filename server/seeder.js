const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/Product')
const products = require('./data/products')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany()
    await Product.insertMany(products)
    console.log('Sample products inserted')
    process.exit()
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
