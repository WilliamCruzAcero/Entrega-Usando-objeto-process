// importar dependencias
import dotenv from 'dotenv'
dotenv.config();
import fileUpload from 'express-fileupload';
import express from 'express';
import path from 'path';

import conectDB from './src/conectDB/conectDB';
import  { logger } from './src/models/loggerWinston';

import homeRouter from './src/routes/ruta-home';
import loginRouter from './src/routes/ruta-login';
import infoRouter from './src/routes/ruta-info';
import registroRouter from './src/routes/ruta-registro';
import avatarRouter from './src/routes/ruta-avatar';
import productosRouter from './src/routes/ruta-productos';
import tiendaRouter from './src/routes/ruta-tienda';
import carritoRouter from './src/routes/ruta-carrito';

export class Server {

    private paths = {
        home: '/',
        login: '/login',
        info: '/info',
        user: '/user',
        avatar: '/avatar',
        productos: '/productos',
        tienda: '/tienda',
        carrito: '/carrito'
    };

    private app = express();

    constructor(
        private port: number = 8080
    ) {}

    async start() {

        logger.info('Conectando la base de datos')
        await conectDB();

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use('/javascript', express.static(path.join(__dirname, 'public', 'javascript')))
        this.app.use('/avatares', express.static(path.join(__dirname, 'public', 'avatares')))

        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: false
        }));
 
        this.app.set('views', './views');
        this.app.set('view engine', 'ejs');

        this.app.use(this.paths.home, homeRouter )
        this.app.use(this.paths.login, loginRouter)
        this.app.use(this.paths.info, infoRouter)
        this.app.use(this.paths.user, registroRouter)
        this.app.use(this.paths.avatar, avatarRouter)
        this.app.use(this.paths.productos, productosRouter)
        this.app.use(this.paths.tienda, tiendaRouter)
        this.app.use(this.paths.carrito, carritoRouter)
        
        this.app.listen(this.port, () => {
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }
}