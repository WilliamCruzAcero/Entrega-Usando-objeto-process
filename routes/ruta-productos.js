const {Router} = require('express');
const { productos } = require('../controllers/productos');
const { verifyToken } = require('../verify/verifyToken');
const { crearProd } = require('../controllers/crear-producto');

const routes = Router();

routes.get('/', verifyToken, productos)
routes.post('/', verifyToken, crearProd)

module.exports = routes;