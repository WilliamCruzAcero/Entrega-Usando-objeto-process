const { Router } = require('express');

const { vistaInicio } = require('../controllers/vista-inicioSesion');
const { logout } = require('../controllers/logout');
const { login } = require('../controllers/login');

const routes = Router();

routes.get('/', vistaInicio)
routes.post('/', login )
routes.post('/logout', logout)


module.exports = routes;