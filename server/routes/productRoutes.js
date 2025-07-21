const express = require('express')
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

const { protect, adminOnly } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getAllProducts)  // Get all products
router.get('/:id', getProductById)  // Get a single product by ID

// Protected Admin Routes
router.post('/', protect, adminOnly, createProduct)  // Create a product (admin only)
router.put('/:id', protect, adminOnly, updateProduct)  // Update a product (admin only)
router.delete('/:id', protect, adminOnly, deleteProduct)  // Delete a product (admin only)

module.exports = router
