const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

router.get('/products', ProductsController.getAll);
router.get('/products/random', ProductsController.getRandom);
router.get('/products/:id', ProductsController.getSingle);
router.post('/products', ProductsController.postSingle);
router.put('/products/:id', ProductsController.editSingle);
router.delete('/products/:id', ProductsController.deleteSingle);

module.exports = router;