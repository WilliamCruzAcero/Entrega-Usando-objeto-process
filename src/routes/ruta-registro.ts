import {Router} from 'express';
import { vistaRegistro } from '../controllers/visa-registroUsuario';
import { registroUsuario } from '../controllers/registroUsuario';

const routes = Router();

routes.get('/', vistaRegistro)
routes.post('/', registroUsuario)

export default routes; 
