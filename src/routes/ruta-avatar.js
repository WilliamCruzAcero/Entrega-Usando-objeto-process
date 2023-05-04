const {Router} = require('express');
const { avatar } = require('../controllers/avatar');


const routes = Router();


routes.post('/', avatar)            
         
        
module.exports = routes; 