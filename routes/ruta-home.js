const { Router } = require('express');
const { vistaHome } = require('../controllers/vista-home');

const routes = Router();

routes.get('/', vistaHome)

module.exports = routes; 