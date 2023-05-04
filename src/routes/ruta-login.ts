import { Router } from 'express';

import { vistaInicio } from '../controllers/vista-inicioSesion';
import { login } from '../controllers/login';
import { logout } from '../controllers/logout';


const routes = Router();

routes.get('/', vistaInicio),
routes.post('/', login ),
routes.post('/logout', logout )


export default routes;