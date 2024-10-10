const axios = require('axios');
const catchAsync = require('../utils/catchAsync');


const SHOPIFY_API_URL = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/orders.json`;
const SHOPIFY_HEADERS = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
};

// Create an order
const createOrder = catchAsync(async (req, res) => {
    const orderData = {
        order: {
            line_items: req.body.line_items,
            transactions: req.body.transactions,
            total_tax: req.body.total_tax,
            currency: req.body.currency
        }
    };

    const response = await axios.post(SHOPIFY_API_URL, orderData, { headers: SHOPIFY_HEADERS });
    res.status(201).json(response.data);
});

// Update an order
const updateOrder = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updateUrl = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/orders/${id}.json`;

    const orderData = {
        order: {
            id,
            metafields: req.body.metafields
        }
    };

    const response = await axios.put(updateUrl, orderData, { headers: SHOPIFY_HEADERS });
    res.status(200).json(response.data);
});

// Delete an order
const deleteOrder = catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteUrl = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/orders/${id}.json`;

    await axios.delete(deleteUrl, { headers: SHOPIFY_HEADERS });
    res.status(200).send({message:'ok'}); // No content for successful deletion
});

// Fetch all orders
const fetchOrders = catchAsync(async (req, res) => {
    const response = await axios.get(SHOPIFY_API_URL, { headers: SHOPIFY_HEADERS });
    res.status(200).json(response.data);
});

// Fetch a single order by ID
const getOrderById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const getUrl = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/orders/${id}.json`;

    const response = await axios.get(getUrl, { headers: SHOPIFY_HEADERS });
    res.status(200).json(response.data);
});

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    fetchOrders,
    getOrderById
};
