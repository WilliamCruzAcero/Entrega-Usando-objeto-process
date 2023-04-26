const { Router } = require('express');

const { vistaInfo } = require('../controllers/vista-info');
const { vistaInfoGzip } = require('../controllers/vista-info-gzip');
const compression = require('compression');
const gzip = compression();

const routes = Router();

routes.get('/', vistaInfo)
routes.get('/gzip', gzip, vistaInfoGzip)

module.exports = routes; 