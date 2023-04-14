const { Router } = require('express');
const { vistaRandom } = require('../controllers/vista-random');


const routes = Router();

routes.get('/',vistaRandom)

module.exports = routes