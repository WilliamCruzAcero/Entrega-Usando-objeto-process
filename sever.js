// importar dependencias
require('dotenv').config();
const fileUpload = require('express-fileupload');

const express = require('express')


const path = require('path')
// const { loggerProd, loggerDev } = require('./logger');

const crypto = require('crypto');
const { conectDB } = require('./conectDB/conectDB')

// const NODE_ENV = process.env.NODE_ENV || 'development'
// const logger = NODE_ENV === 'production'
//             ? loggerProd
//             : loggerDev;

class Server {

    constructor (port) {
        this.app = express();
        this.port = port;
        this.home = '/'
        this.login = '/sesion'
        this.info = '/info'
        this.random = '/random'
        this.user = '/user'
        this.avatar = '/avatar'
        this.productos = '/productos'
    }
    
    async start() {
        
        await conectDB();
    
        
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(express.json())
        
        this.app.use('/javascript', express.static(path.join(__dirname, 'public', 'javascript')))
        this.app.use('/avatares', express.static(path.join(__dirname, 'public', 'avatares')))

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: false            
        }));
        
        this.app.set('views', './views');
        this.app.set('view engine', 'ejs');
        
        this.app.use(this.home, require('./routes/ruta-home'))
        this.app.use(this.login, require('./routes/ruta-login'))
        this.app.use(this.info, require('./routes/ruta-info'))
        this.app.use(this.random, require('./routes/ruta-random'))
        this.app.use(this.user, require('./routes/ruta-registro'))
        this.app.use(this.avatar, require('./routes/ruta-avatar'))
        this.app.use(this.productos, require('./routes/ruta-productos'))
        
        // this.app.post('/avatar', function(req, res) {           
         
        //     if (!req.files || Object.keys(req.files).length === 0) {
        //       return res.status(400).send('La solicitud no contiene archivos.');
        //     }
          
        //     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        //     const {avatar} = req.files;

        //     const id = crypto.randomUUID();

        //     const nameSplitted = avatar.name.split('.') || [];
        //     const extension = nameSplitted.pop() || '';
        //     const originalName = nameSplitted.join('.');
        //     const nameAvatar = `${originalName}_${id}.${extension}`

        //     if ( !['png', 'jpg', 'tiff', 'jpeg'].includes(extension.toLocaleLowerCase()) ) {
        //         return res.status(400).send('Extensión no soportada');
        //     }

        //     const uploadPath = __dirname + '/public/avatares/' + nameAvatar;
          
        //     // Use the mv() method to place the file somewhere on your server
        //     avatar.mv(uploadPath, function(err) {
        //       if (err)
        //         return res.status(500).send(err);
          
        //       res.json({
        //         avatar: nameAvatar
        //       });
        //     });
        //   });
      
      
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;