import {Router} from 'express';
import { avatar } from '../controllers/avatar';


const routes = Router();

routes.post('/', avatar)            
         
export default routes; 