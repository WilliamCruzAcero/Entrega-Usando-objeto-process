const {Router} = require('express');
const { verifyToken } = require('../verify/verifyToken');
const { crearProd } = require('../controllers/crear-producto');
const { obtenerProductos } = require('../controllers/obtener-productos');

const routes = Router();

routes.get('/', verifyToken, obtenerProductos)
routes.post('/', verifyToken, crearProd)

module.exports = routes;