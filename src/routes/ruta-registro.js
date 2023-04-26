const {Router} = require('express');
const { vistaRegistro } = require('../controllers/visa-registroUsuario');
const { registroUsuario } = require('../controllers/registroUsuario');

const routes = Router();

routes.get('/', vistaRegistro)
routes.post('/', registroUsuario)

module.exports = routes; 
