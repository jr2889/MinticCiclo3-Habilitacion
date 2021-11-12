var express = require('express');
var ProductsRouter = express.Router();

const productsController = require('../controllers/productController');

//const tokenMiddlewares = require('../middlewares/tokenMiddleware');

//ProductsRouter.use(tokenMiddlewares.verifyToken);



ProductsRouter.route('/')
 
  .get(productsController.listProducts)
  .post(productsController.createProduct);

  ProductsRouter.route('/:id')
  .get(productsController.getProduct)
  .put(productsController.modifyproduct)
  .delete(productsController.deleteProduct);

module.exports = ProductsRouter;

