import { Router } from 'express';
import { vistaCarrito } from '../controllers/vista-carrito';


const routes = Router();

routes.get('/', vistaCarrito)


export default routes;