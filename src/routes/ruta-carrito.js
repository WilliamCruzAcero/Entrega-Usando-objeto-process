const { Router } = require('express');
const { vistaCarrito } = require('../controllers/vista-carrito');


const routes = Router();

routes.get('/', vistaCarrito)
// routes.post('/', listaCarrito)

module.exports = routes;