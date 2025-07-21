const Product = require('../models/Product')

// @desc    Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get single product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Create product (admin only)
exports.createProduct = async (req, res) => {
  const { name, description, price, category, stock, image } = req.body

  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      image,
    })
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// @desc    Update product (admin only)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })

    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Delete product (admin only)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })

    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product removed' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
