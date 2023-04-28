import { Router } from 'express';

import { vistaInicio } from '../controllers/vista-inicioSesion';
import { logout } from '../controllers/logout';
import { login } from '../controllers/login';

const routes = Router();

routes.get('/', vistaInicio)
routes.post('/', login )
routes.post('/logout', logout )


export default routes;