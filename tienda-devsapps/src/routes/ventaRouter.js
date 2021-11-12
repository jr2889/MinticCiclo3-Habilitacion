var express = require('express');
var VentasRouter = express.Router();

const ventaController = require('../controllers/ventaController');

//const tokenMiddlewares = require('../controllers/authController');

//VentasRouter.use(tokenMiddlewares.verifyToken);


VentasRouter.route('/')
 
  .get(ventaController.listVentas)
  .post(ventaController.createVenta);

  VentasRouter.route('/:id')
  .get(ventaController.getVenta)
  .put(ventaController.modifyventa)
  .delete(ventaController.deleteVenta);

module.exports = VentasRouter;

