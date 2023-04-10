const {Router} = require('express');
const { vistaRegistro } = require('../controllers/ruta-vistaRegistro');


const routes = Router();

routes.get('/user', vistaRegistro)

module.exports = routes;