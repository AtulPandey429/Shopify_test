const axios = require('axios');
const catchAsync = require("../utils/catchAsync");
const SHOPIFY_API_VERSION = '2024-10';
const SHOPIFY_HEADERS = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
};
const fetchInventoryItemsByIds = catchAsync(async (req, res) => {
    const { ids } = req.query;  // Expecting a comma-separated list of inventory item IDs
    const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-10/inventory_items.json?ids=${ids}`;

    const response = await axios.get(url, { headers: SHOPIFY_HEADERS });
    res.status(200).json(response.data);
});

module.exports = {
    fetchInventoryItemsByIds
};