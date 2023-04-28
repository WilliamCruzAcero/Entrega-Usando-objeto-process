import { Router } from 'express';

import { vistaInfo } from '../controllers/vista-info';
import { vistaInfoGzip } from '../controllers/vista-info-gzip';
import compression from 'compression';
const gzip = compression();

const routes = Router();

routes.get('/', vistaInfo)
routes.get('/gzip', gzip, vistaInfoGzip)

export default routes