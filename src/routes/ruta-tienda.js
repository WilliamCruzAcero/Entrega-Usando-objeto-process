const {Router} = require('express');
const { tienda } = require('../controllers/vista-tienda');
const { verifyTokenWithRedirect } = require('../verify/verifyToken');

const routes = Router();

routes.get('/',verifyTokenWithRedirect, tienda)

module.exports = routes; 