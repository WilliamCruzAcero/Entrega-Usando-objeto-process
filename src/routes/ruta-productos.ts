import {Router} from 'express';
import { verifyToken, verifyTokenWithRedirect } from '../verify/verifyToken';
import { productos } from '../controllers/productos';
import { crearProd } from '../controllers/crear-producto';

const routes = Router();

routes.get('/', verifyTokenWithRedirect, productos)
routes.post('/', verifyToken, crearProd)

export default routes;