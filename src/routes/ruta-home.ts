import { Router } from 'express';
import { vistaHome } from '../controllers/vista-home';

const routes = Router();

routes.get('/', vistaHome)

export default routes;