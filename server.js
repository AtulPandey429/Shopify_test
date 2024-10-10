const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
app.use(express.json());
const productRoutes = require('./src/router/product.routes');
app.use('/api/v1', productRoutes);

app.listen(1000, () => {
    console.log('Server is running on port 1000');
})