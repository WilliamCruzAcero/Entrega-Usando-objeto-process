// importar dependencias
require('dotenv').config();
const fileUpload = require('express-fileupload');

const express = require('express')
const path = require('path')

const { conectDB } = require('./conectDB/conectDB');
const { logger } = require('./wiston/loggerWinston');

class Server {

    constructor(port) {
        this.app = express();
        this.port = port;
        this.home = '/'
        this.login = '/sesion'
        this.info = '/info'
        this.user = '/user'
        this.avatar = '/avatar'
        this.productos = '/productos'
        this.carrito = '/carrito'
    }

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

        this.app.use(this.home, require('./routes/ruta-home'))
        this.app.use(this.login, require('./routes/ruta-login'))
        this.app.use(this.info, require('./routes/ruta-info'))
        this.app.use(this.user, require('./routes/ruta-registro'))
        this.app.use(this.avatar, require('./routes/ruta-avatar'))
        this.app.use(this.productos, require('./routes/ruta-productos'))
        this.app.use(this.carrito, require('./routes/ruta-carrito'))
        this.app.listen(this.port, () => {
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;