const express = require('express');
const { createProduct, fetchProducts, getProduct, updateProduct, deleteProduct } = require('../controller/product.controller');
const { createOrder, fetchOrders, getOrderById, updateOrder, deleteOrder } = require('../controller/order.controller');
const { fetchInventoryItemsByIds } = require('../controller/inventry.controller');


const router = express.Router();

router.post('/product',createProduct)
router.get('/product', fetchProducts)
router.get('/product/:id',getProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id', deleteProduct)


router.post('/order', createOrder);
router.get('/order', fetchOrders);
router.get('/order/:id', getOrderById);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);


router.get('/inventry',fetchInventoryItemsByIds)
module.exports = router;