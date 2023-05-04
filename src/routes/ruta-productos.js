const {Router} = require('express');
const { verifyToken, verifyTokenWithRedirect } = require('../verify/verifyToken');
const { crearProd } = require('../controllers/crear-producto');
const { productos } = require('../controllers/productos');

const routes = Router();

routes.get('/', verifyTokenWithRedirect, productos)
routes.post('/', verifyToken, crearProd)

module.exports = routes;