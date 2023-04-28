import {Router} from 'express';
import { tienda } from '../controllers/vista-tienda';
import { verifyTokenWithRedirect } from '../verify/verifyToken';

const routes = Router();

routes.get('/',verifyTokenWithRedirect, tienda)

export default routes; 