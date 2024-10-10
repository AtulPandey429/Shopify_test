const axios = require('axios');
const catchAsync = require('../utils/catchAsync');


const fetchProducts = catchAsync(async (req, res) => {
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json`;
    const { data } = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        }
    });
    res.status(200).json(data);
});

const getProduct = catchAsync(async (req, res) => {
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products/${req.params.id}.json`;
    const { data } = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        }
    });
    res.status(200).json(data);
});

const createProduct = catchAsync(async (req, res) => {
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products.json`;
    const { data } = await axios.post(url, { product: req.body }, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        }
    });
    res.status(201).json(data);
});

const updateProduct = catchAsync(async (req, res) => {
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products/${req.params.id}.json`;
    const { data } = await axios.put(url, { product: req.body }, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        }
    });
    res.status(200).json(data);
});

const  deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/products/${id}.json`;

    await axios.delete(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        }
    });

    res.status(200).send({message:"ok"}); // No content on successful delete
});

module.exports = {
    fetchProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};
