/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SMTP_PORT = exports.ADMIN_EMAIL = exports.GMAIL_PASSWORD = exports.GMAIL_USER = exports.TWILIO_PHONE_NUMBER = exports.TWILIO_AUTH_TOKEN = exports.TWILIO_ACOUNT_SID = exports.SECRET = exports.MONGO_URI = exports.PORT = void 0;\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nexports.PORT = parseInt(process.env.PORT || process.argv[3]);\nexports.MONGO_URI = process.env.MONGO_URI || \"localhost:8080\";\nexports.SECRET = process.env.SECRET;\nexports.TWILIO_ACOUNT_SID = process.env.TWILIO_ACOUNT_SID;\nexports.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;\nexports.TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;\nexports.GMAIL_USER = process.env.GMAIL_USER;\nexports.GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;\nexports.ADMIN_EMAIL = process.env.ADMIN_EMAIL;\nexports.SMTP_PORT = process.env.SMTP_PORT;\n\n\n//# sourceURL=webpack://express-session/./config/index.ts?");

/***/ }),

/***/ "./src/conectDB/conectDB.ts":
/*!**********************************!*\
  !*** ./src/conectDB/conectDB.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst config_1 = __webpack_require__(/*! ../../config */ \"./config/index.ts\");\nfunction conectDB() {\n    return __awaiter(this, void 0, void 0, function* () {\n        mongoose_1.default.set('strictQuery', false);\n        yield mongoose_1.default.connect(config_1.MONGO_URI);\n    });\n}\nexports[\"default\"] = () => conectDB().catch(err => console.log(err));\n\n\n//# sourceURL=webpack://express-session/./src/conectDB/conectDB.ts?");

/***/ }),

/***/ "./src/controllers/avatar.ts":
/*!***********************************!*\
  !*** ./src/controllers/avatar.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.avatar = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst crypto_1 = __importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\nconst avatar = function (req, res) {\n    if (!req.files || Object.keys(req.files).length === 0) {\n        return res.status(400).send('La solicitud no contiene archivos.');\n    }\n    // The name of the input field (i.e. \"sampleFile\") is used to retrieve the uploaded file\n    const { avatar } = req.files;\n    const id = crypto_1.default.randomUUID();\n    const nameSplitted = avatar.name.split('.') || [];\n    const extension = nameSplitted.pop() || '';\n    const originalName = nameSplitted.join('.');\n    const nameAvatar = `${originalName}_${id}.${extension}`;\n    if (!['png', 'jpg', 'tiff', 'jpeg'].includes(extension.toLocaleLowerCase())) {\n        return res.status(400).send('Extensión no soportada');\n    }\n    const uploadPath = path_1.default.join(__dirname, '..', 'public', 'avatares', nameAvatar);\n    // Use the mv() method to place the file somewhere on your server\n    avatar.mv(uploadPath, function (err) {\n        if (err)\n            return res.status(500).send(err);\n        res.json({\n            avatar: nameAvatar\n        });\n    });\n};\nexports.avatar = avatar;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/avatar.ts?");

/***/ }),

/***/ "./src/controllers/crear-producto.ts":
/*!*******************************************!*\
  !*** ./src/controllers/crear-producto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.crearProd = void 0;\nconst modelUsuario_1 = __webpack_require__(/*! ../models/modelUsuario */ \"./src/models/modelUsuario.ts\");\nconst verifyCampo_1 = __webpack_require__(/*! ../verify/verifyCampo */ \"./src/verify/verifyCampo.ts\");\nconst crearProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { email } = req.token;\n    const { nombre, precio, imagen, cantidad } = req.body;\n    let err = 'Los siguientes campos son requeridos:';\n    const camposFaltantes = [];\n    try {\n        (0, verifyCampo_1.verificarCampoRequerido)(nombre, `${err} Nombre`);\n    }\n    catch (error) {\n        return res.status(error.status).json({ error: error.message });\n    }\n    const user = yield modelUsuario_1.usuarioModel.findOne({ email });\n    const productoExistente = user.productos.find(producto => producto.nombre === nombre);\n    if (productoExistente) {\n        const posicionDelProducto = user.productos.indexOf(productoExistente);\n        if (precio)\n            productoExistente.precio = precio;\n        if (imagen)\n            productoExistente.imagen = imagen;\n        if (cantidad)\n            productoExistente.cantidad = cantidad;\n        user.productos[posicionDelProducto] = productoExistente;\n    }\n    else {\n        try {\n            (0, verifyCampo_1.verificarCampoRequerido)(precio);\n        }\n        catch (error) {\n            camposFaltantes.push('Precio');\n        }\n        try {\n            (0, verifyCampo_1.verificarCampoRequerido)(imagen);\n        }\n        catch (error) {\n            camposFaltantes.push('Imagen');\n        }\n        try {\n            (0, verifyCampo_1.verificarCampoRequerido)(cantidad);\n        }\n        catch (error) {\n            camposFaltantes.push('Cantidad');\n        }\n        if (camposFaltantes.length) {\n            err = err + ' ' + camposFaltantes.join(', ');\n            return res.status(StatusCodes.BAD_REQUEST).json({ error: err });\n        }\n        user.productos.push({\n            nombre,\n            precio,\n            imagen,\n            cantidad\n        });\n    }\n    yield user.save();\n    res.json({});\n});\nexports.crearProd = crearProd;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/crear-producto.ts?");

/***/ }),

/***/ "./src/controllers/login.ts":
/*!**********************************!*\
  !*** ./src/controllers/login.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.login = void 0;\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst webError_1 = __webpack_require__(/*! ../models/webError */ \"./src/models/webError.ts\");\nconst http_status_codes_1 = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\nconst modelUsuario_1 = __webpack_require__(/*! ../models/modelUsuario */ \"./src/models/modelUsuario.ts\");\nconst loggerWinston_1 = __webpack_require__(/*! ../models/loggerWinston */ \"./src/models/loggerWinston.ts\");\nconst secret = process.env.SECRET;\nconst login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { email, password } = req.body;\n    let user;\n    try {\n        if (!email) {\n            throw new webError_1.WebError('El email de usuario es requerido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!password) {\n            throw new webError_1.WebError('La contraseña es requerida', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        user = yield modelUsuario_1.usuarioModel.findOne({ email });\n        if (!(user === null || user === void 0 ? void 0 : user.email)) {\n            throw new webError_1.WebError('El usuario no esta registrado', http_status_codes_1.StatusCodes.UNAUTHORIZED);\n        }\n        const hashedPassword = user.password;\n        const isCorrectPassword = yield bcrypt_1.default.compare(password, hashedPassword);\n        if (!isCorrectPassword) {\n            throw new webError_1.WebError('El nombre de usuario o contraseña es incorrecta', http_status_codes_1.StatusCodes.UNAUTHORIZED);\n        }\n    }\n    catch (error) {\n        const status = error.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;\n        loggerWinston_1.logger.log('error', error.message);\n        return res.status(status).json({\n            error: error.message\n        });\n    }\n    const tokenBody = {\n        email: user.email,\n        name: user.name,\n    };\n    const token = jsonwebtoken_1.default.sign(tokenBody, secret, { expiresIn: '1h' });\n    res.json({ token });\n});\nexports.login = login;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/login.ts?");

/***/ }),

/***/ "./src/controllers/logout.ts":
/*!***********************************!*\
  !*** ./src/controllers/logout.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logout = void 0;\nconst logout = (req, res) => {\n    const { name } = req.token;\n    res.render('mensaje', { mensaje: `Hasta luego ${name}` });\n};\nexports.logout = logout;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/logout.ts?");

/***/ }),

/***/ "./src/controllers/productos.ts":
/*!**************************************!*\
  !*** ./src/controllers/productos.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.productos = void 0;\nconst modelUsuario_1 = __webpack_require__(/*! ../models/modelUsuario */ \"./src/models/modelUsuario.ts\");\nconst productos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { email, name, lastname } = req.token;\n    const user = yield modelUsuario_1.usuarioModel.findOne({ email });\n    res.render('formulario-productos', {\n        productos: user.productos,\n        usuario: {\n            nombre: name,\n            apellido: lastname,\n            email\n        }\n    });\n});\nexports.productos = productos;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/productos.ts?");

/***/ }),

/***/ "./src/controllers/registroUsuario.ts":
/*!********************************************!*\
  !*** ./src/controllers/registroUsuario.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.registroUsuario = void 0;\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst nodemailer_1 = __importDefault(__webpack_require__(/*! nodemailer */ \"nodemailer\"));\nconst http_status_codes_1 = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\nconst modelUsuario_1 = __webpack_require__(/*! ../models/modelUsuario */ \"./src/models/modelUsuario.ts\");\nconst msgWhatsapp_1 = __importDefault(__webpack_require__(/*! ../services/whatsapp/msgWhatsapp */ \"./src/services/whatsapp/msgWhatsapp.ts\"));\nconst { logger } = __webpack_require__(/*! ../models/loggerWinston */ \"./src/models/loggerWinston.ts\");\nconst WebError = __webpack_require__(/*! ../models/webError */ \"./src/models/webError.ts\");\n// const { sendMailFromNodeMailer } = require('../services/msgGmail/index_gmail');\nconst ADMIN_EMAIL = process.env.ADMIN_EMAIL;\nconst GMAIL_USER = process.env.GMAIL_USER;\nconst GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;\nconst registroUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { type, name, lastname, age, phone, email, password, address, city, country } = req.body;\n    try {\n        if (!type) {\n            throw new WebError('Seleccione un tipo de usuario', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!name) {\n            throw new WebError('El nombre de usuario es requerido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!lastname) {\n            throw new WebError('El apellido del usuario es requerido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!age) {\n            throw new WebError('La edad del usuario es requerida', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!phone) {\n            throw new WebError('El número de teléfono es requerido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        var isPhoneRedExp = /^\\(?(\\d{3})\\)?[-]?(\\d{3})[-]?(\\d{4})$/;\n        if (!isPhoneRedExp.test(phone)) {\n            throw new WebError('El numero de teléfono no es valido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!email) {\n            throw new WebError(`El email es requerido`, http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        var isEmailRegExp = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\n        if (!isEmailRegExp.test(email)) {\n            throw new WebError('El email debe ser un correo electrónico', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!password) {\n            throw new WebError('La contraseña es requerida', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!address) {\n            throw new WebError('La dirección es requerida', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!city) {\n            throw new WebError('La ciudad es requerida', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        if (!country) {\n            throw new WebError('El pais requerido', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        const usuarioExistente = yield modelUsuario_1.usuarioModel.findOne({ email });\n        if (usuarioExistente === null || usuarioExistente === void 0 ? void 0 : usuarioExistente.email) {\n            throw new WebError('El email ya esta en uso', http_status_codes_1.StatusCodes.BAD_REQUEST);\n        }\n        const saltRounds = 10;\n        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);\n        const { avatar } = req.body;\n        const nuevoUsuario = new modelUsuario_1.usuarioModel({\n            type,\n            avatar,\n            name,\n            lastname,\n            age,\n            phone,\n            email,\n            password: hashedPassword,\n            address,\n            city,\n            country,\n            productos: []\n        });\n        yield nuevoUsuario.save();\n        const transporter = nodemailer_1.default.createTransport({\n            host: 'smtp.gmail.com',\n            port: process.env.SMTP_PORT,\n            auth: {\n                user: GMAIL_USER,\n                pass: GMAIL_PASSWORD,\n            },\n            tls: {\n                rejectUnauthorized: false\n            }\n        });\n        const mailOptions = {\n            from: \"ecommerce\",\n            to: ADMIN_EMAIL,\n            subject: \"Nuevo usuario registrado\",\n            html: `usuario:\r\n                        Tipo de usuario: ${type}, \r\n                        Nombre: ${name} ${lastname}, \r\n                        Edad: ${age},\r\n                        Telefono: ${phone},\r\n                        Correo: ${email},\r\n                        Dirección: ${address},\r\n                        Ciudad: ${city},\r\n                        Pais: ${country}`\n        };\n        function sendMailFromNodeMailer() {\n            return __awaiter(this, void 0, void 0, function* () {\n                try {\n                    const info = yield transporter.sendMail(mailOptions);\n                    // console.log(info);\n                }\n                catch (err) {\n                    console.log(err);\n                }\n            });\n        }\n        sendMailFromNodeMailer();\n        (0, msgWhatsapp_1.default)();\n        res.json({\n            message: `Usuario ${name} ${lastname} con ${email}, registrado con exito`\n        });\n    }\n    catch (error) {\n        const status = error.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;\n        logger.log('error', error.message);\n        return res.status(status).json({\n            error: error.message\n        });\n    }\n});\nexports.registroUsuario = registroUsuario;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/registroUsuario.ts?");

/***/ }),

/***/ "./src/controllers/visa-registroUsuario.ts":
/*!*************************************************!*\
  !*** ./src/controllers/visa-registroUsuario.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaRegistro = void 0;\nconst vistaRegistro = (req, res) => {\n    res.render('formulario-registrar-usuario');\n};\nexports.vistaRegistro = vistaRegistro;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/visa-registroUsuario.ts?");

/***/ }),

/***/ "./src/controllers/vista-carrito.ts":
/*!******************************************!*\
  !*** ./src/controllers/vista-carrito.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaCarrito = void 0;\nconst vistaCarrito = (req, res) => {\n    res.render('carrito');\n};\nexports.vistaCarrito = vistaCarrito;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-carrito.ts?");

/***/ }),

/***/ "./src/controllers/vista-home.ts":
/*!***************************************!*\
  !*** ./src/controllers/vista-home.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaHome = void 0;\nconst vistaHome = (req, res) => {\n    res.render('home');\n};\nexports.vistaHome = vistaHome;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-home.ts?");

/***/ }),

/***/ "./src/controllers/vista-info-gzip.ts":
/*!********************************************!*\
  !*** ./src/controllers/vista-info-gzip.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaInfoGzip = void 0;\nconst child_process_1 = __webpack_require__(/*! child_process */ \"child_process\");\nconst vistaInfoGzip = (res) => {\n    const serverInfo = {\n        path: process.cwd(),\n        plataforma: process.platform,\n        pid: process.pid,\n        version: process.version,\n        carpeta: process.title,\n        memoria: process.memoryUsage.rss()\n    };\n    const dataNucleos = (0, child_process_1.fork)('./child/cpus.js');\n    dataNucleos.send('start');\n    dataNucleos.on('message', numNucleos => {\n        res.render('mostrar-info', {\n            info: serverInfo,\n            numNucleos\n        });\n    });\n};\nexports.vistaInfoGzip = vistaInfoGzip;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-info-gzip.ts?");

/***/ }),

/***/ "./src/controllers/vista-info.ts":
/*!***************************************!*\
  !*** ./src/controllers/vista-info.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaInfo = void 0;\nconst child_process_1 = __webpack_require__(/*! child_process */ \"child_process\");\nconst vistaInfo = (req, res) => {\n    const serverInfo = {\n        path: process.cwd(),\n        plataforma: process.platform,\n        pid: process.pid,\n        version: process.version,\n        carpeta: process.title,\n        memoria: process.memoryUsage.rss()\n    };\n    const dataNucleos = (0, child_process_1.fork)('./child/cpus.js');\n    dataNucleos.send('start');\n    dataNucleos.on('message', numNucleos => {\n        res.render('mostrar-info', {\n            info: serverInfo,\n            numNucleos\n        });\n    });\n};\nexports.vistaInfo = vistaInfo;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-info.ts?");

/***/ }),

/***/ "./src/controllers/vista-inicioSesion.ts":
/*!***********************************************!*\
  !*** ./src/controllers/vista-inicioSesion.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.vistaInicio = void 0;\nconst vistaInicio = (req, res) => {\n    res.render('formulario-inicio-sesion');\n};\nexports.vistaInicio = vistaInicio;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-inicioSesion.ts?");

/***/ }),

/***/ "./src/controllers/vista-tienda.ts":
/*!*****************************************!*\
  !*** ./src/controllers/vista-tienda.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.tienda = void 0;\nconst modelUsuario_1 = __webpack_require__(/*! ../models/modelUsuario */ \"./src/models/modelUsuario.ts\");\nconst tienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { email, name, lastname } = req.token;\n    const user = yield modelUsuario_1.usuarioModel.findOne({ email });\n    res.render('tienda', {\n        productos: user.productos,\n        usuario: {\n            nombre: name,\n            apellido: lastname,\n            email\n        }\n    });\n});\nexports.tienda = tienda;\n\n\n//# sourceURL=webpack://express-session/./src/controllers/vista-tienda.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config({ path: '../env/.env' });\nconst cluster_1 = __importDefault(__webpack_require__(/*! cluster */ \"cluster\"));\nconst os_1 = __webpack_require__(/*! os */ \"os\");\nconst sever_1 = __webpack_require__(/*! ./sever */ \"./src/sever.ts\");\nconst index_1 = __webpack_require__(/*! ../config/index */ \"./config/index.ts\");\nconst main = () => __awaiter(void 0, void 0, void 0, function* () {\n    const port = index_1.PORT;\n    const server = new sever_1.Server(port);\n    yield server.start();\n});\nconst modoCluster = process.argv[2] === 'CLUSTER';\nconst cpuNum = (0, os_1.cpus)().length;\nif (modoCluster && cluster_1.default.isPrimary) {\n    console.log(`Cluster iniciando. CPUS: ${cpuNum}`);\n    console.log(`PID: ${process.pid}`);\n    for (let i = 0; i < cpuNum - 1; i++) {\n        cluster_1.default.fork();\n    }\n    cluster_1.default.on('exit', worker => {\n        console.log(`${new Date().toLocaleString()}: Worker ${worker.process.pid}`);\n        cluster_1.default.fork();\n    });\n}\nelse {\n    console.log(`PID: ${process.pid}`);\n    main();\n}\n\n\n//# sourceURL=webpack://express-session/./src/index.ts?");

/***/ }),

/***/ "./src/models/loggerWinston.ts":
/*!*************************************!*\
  !*** ./src/models/loggerWinston.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logger = void 0;\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\nconst loggerDev = winston_1.default.createLogger({\n    level: \"info\",\n    transports: [\n        new winston_1.default.transports.Console({ level: \"info\" }),\n    ],\n});\nconst loggerProd = winston_1.default.createLogger({\n    level: \"warn\",\n    transports: [\n        new winston_1.default.transports.File({ filename: \"warn.log\", level: \"warn\" }),\n        new winston_1.default.transports.Console({ level: \"warn\" }),\n        new winston_1.default.transports.File({ filename: \"error.log\", level: \"error\" }),\n        new winston_1.default.transports.Console({ level: \"error\" })\n    ]\n});\nconst NODE_ENV = \"development\" || 0;\nexports.logger = NODE_ENV === 'production'\n    ? loggerProd\n    : loggerDev;\n\n\n//# sourceURL=webpack://express-session/./src/models/loggerWinston.ts?");

/***/ }),

/***/ "./src/models/modelUsuario.ts":
/*!************************************!*\
  !*** ./src/models/modelUsuario.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.usuarioModel = exports.usuarioSchema = exports.usuarioDTO = void 0;\nconst { Schema, model } = __webpack_require__(/*! mongoose */ \"mongoose\");\nclass usuarioDTO {\n}\nexports.usuarioDTO = usuarioDTO;\nexports.usuarioSchema = new Schema({\n    type: { type: String, required: true, default: '' },\n    avatar: { type: String, required: true, default: '' },\n    name: { type: String, required: true, default: '' },\n    lastname: { type: String, required: true, default: '' },\n    age: { type: Number, required: true, default: 0 },\n    phone: { type: Number, required: true, default: 0 },\n    email: { type: String, required: true, default: '' },\n    password: { type: String, required: true, default: '' },\n    address: { type: String, required: true, default: '' },\n    city: { type: String, required: true, default: '' },\n    country: { type: String, required: true, default: '' },\n    productos: [{\n            nombre: { type: String, required: true, default: '' },\n            precio: { type: Number, required: true, default: 0 },\n            imagen: { type: String, required: true, default: '' },\n            cantidad: { type: Number, required: true, default: 0 },\n        }]\n});\nexports.usuarioModel = model('Usuario', exports.usuarioSchema);\n\n\n//# sourceURL=webpack://express-session/./src/models/modelUsuario.ts?");

/***/ }),

/***/ "./src/models/webError.ts":
/*!********************************!*\
  !*** ./src/models/webError.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WebError = void 0;\nclass WebError extends Error {\n    constructor(message, status) {\n        super(message);\n        status;\n    }\n}\nexports.WebError = WebError;\n\n\n//# sourceURL=webpack://express-session/./src/models/webError.ts?");

/***/ }),

/***/ "./src/routes/ruta-avatar.ts":
/*!***********************************!*\
  !*** ./src/routes/ruta-avatar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst avatar_1 = __webpack_require__(/*! ../controllers/avatar */ \"./src/controllers/avatar.ts\");\nconst routes = (0, express_1.Router)();\nroutes.post('/', avatar_1.avatar);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-avatar.ts?");

/***/ }),

/***/ "./src/routes/ruta-carrito.ts":
/*!************************************!*\
  !*** ./src/routes/ruta-carrito.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst vista_carrito_1 = __webpack_require__(/*! ../controllers/vista-carrito */ \"./src/controllers/vista-carrito.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', vista_carrito_1.vistaCarrito);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-carrito.ts?");

/***/ }),

/***/ "./src/routes/ruta-home.ts":
/*!*********************************!*\
  !*** ./src/routes/ruta-home.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst vista_home_1 = __webpack_require__(/*! ../controllers/vista-home */ \"./src/controllers/vista-home.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', vista_home_1.vistaHome);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-home.ts?");

/***/ }),

/***/ "./src/routes/ruta-info.ts":
/*!*********************************!*\
  !*** ./src/routes/ruta-info.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst vista_info_1 = __webpack_require__(/*! ../controllers/vista-info */ \"./src/controllers/vista-info.ts\");\nconst vista_info_gzip_1 = __webpack_require__(/*! ../controllers/vista-info-gzip */ \"./src/controllers/vista-info-gzip.ts\");\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\nconst gzip = (0, compression_1.default)();\nconst routes = (0, express_1.Router)();\nroutes.get('/', vista_info_1.vistaInfo);\nroutes.get('/gzip', gzip, vista_info_gzip_1.vistaInfoGzip);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-info.ts?");

/***/ }),

/***/ "./src/routes/ruta-login.ts":
/*!**********************************!*\
  !*** ./src/routes/ruta-login.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst vista_inicioSesion_1 = __webpack_require__(/*! ../controllers/vista-inicioSesion */ \"./src/controllers/vista-inicioSesion.ts\");\nconst logout_1 = __webpack_require__(/*! ../controllers/logout */ \"./src/controllers/logout.ts\");\nconst login_1 = __webpack_require__(/*! ../controllers/login */ \"./src/controllers/login.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', vista_inicioSesion_1.vistaInicio);\nroutes.post('/', login_1.login);\nroutes.post('/logout', logout_1.logout);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-login.ts?");

/***/ }),

/***/ "./src/routes/ruta-productos.ts":
/*!**************************************!*\
  !*** ./src/routes/ruta-productos.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst verifyToken_1 = __webpack_require__(/*! ../verify/verifyToken */ \"./src/verify/verifyToken.ts\");\nconst productos_1 = __webpack_require__(/*! ../controllers/productos */ \"./src/controllers/productos.ts\");\nconst crear_producto_1 = __webpack_require__(/*! ../controllers/crear-producto */ \"./src/controllers/crear-producto.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', verifyToken_1.verifyTokenWithRedirect, productos_1.productos);\nroutes.post('/', verifyToken_1.verifyToken, crear_producto_1.crearProd);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-productos.ts?");

/***/ }),

/***/ "./src/routes/ruta-registro.ts":
/*!*************************************!*\
  !*** ./src/routes/ruta-registro.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst visa_registroUsuario_1 = __webpack_require__(/*! ../controllers/visa-registroUsuario */ \"./src/controllers/visa-registroUsuario.ts\");\nconst registroUsuario_1 = __webpack_require__(/*! ../controllers/registroUsuario */ \"./src/controllers/registroUsuario.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', visa_registroUsuario_1.vistaRegistro);\nroutes.post('/', registroUsuario_1.registroUsuario);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-registro.ts?");

/***/ }),

/***/ "./src/routes/ruta-tienda.ts":
/*!***********************************!*\
  !*** ./src/routes/ruta-tienda.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst vista_tienda_1 = __webpack_require__(/*! ../controllers/vista-tienda */ \"./src/controllers/vista-tienda.ts\");\nconst verifyToken_1 = __webpack_require__(/*! ../verify/verifyToken */ \"./src/verify/verifyToken.ts\");\nconst routes = (0, express_1.Router)();\nroutes.get('/', verifyToken_1.verifyTokenWithRedirect, vista_tienda_1.tienda);\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://express-session/./src/routes/ruta-tienda.ts?");

/***/ }),

/***/ "./src/services/whatsapp/msgWhatsapp.ts":
/*!**********************************************!*\
  !*** ./src/services/whatsapp/msgWhatsapp.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst twilio_1 = __importDefault(__webpack_require__(/*! twilio */ \"twilio\"));\nconst TWILIO_ACOUNT_SID = process.env.TWILIO_ACOUNT_SID;\nconst TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;\nconst TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;\nconst client = (0, twilio_1.default)(TWILIO_ACOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER);\nfunction envioWhatsapp() {\n    return __awaiter(this, void 0, void 0, function* () {\n        let result = yield client.messages.create({\n            from: 'whatsapp:+14155238886',\n            to: 'whatsapp:+573107183388',\n            body: `Nuevo usuario registrado:`\n        });\n    });\n}\nexports[\"default\"] = envioWhatsapp;\n\n\n//# sourceURL=webpack://express-session/./src/services/whatsapp/msgWhatsapp.ts?");

/***/ }),

/***/ "./src/sever.ts":
/*!**********************!*\
  !*** ./src/sever.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Server = void 0;\n// importar dependencias\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst express_fileupload_1 = __importDefault(__webpack_require__(/*! express-fileupload */ \"express-fileupload\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst conectDB_1 = __importDefault(__webpack_require__(/*! ./conectDB/conectDB */ \"./src/conectDB/conectDB.ts\"));\nconst loggerWinston_1 = __webpack_require__(/*! ./models/loggerWinston */ \"./src/models/loggerWinston.ts\");\nconst ruta_home_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-home */ \"./src/routes/ruta-home.ts\"));\nconst ruta_login_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-login */ \"./src/routes/ruta-login.ts\"));\nconst ruta_info_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-info */ \"./src/routes/ruta-info.ts\"));\nconst ruta_registro_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-registro */ \"./src/routes/ruta-registro.ts\"));\nconst ruta_avatar_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-avatar */ \"./src/routes/ruta-avatar.ts\"));\nconst ruta_productos_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-productos */ \"./src/routes/ruta-productos.ts\"));\nconst ruta_tienda_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-tienda */ \"./src/routes/ruta-tienda.ts\"));\nconst ruta_carrito_1 = __importDefault(__webpack_require__(/*! ./routes/ruta-carrito */ \"./src/routes/ruta-carrito.ts\"));\nclass Server {\n    constructor(port = 8080) {\n        this.port = port;\n        this.paths = {\n            home: '/',\n            login: '/login',\n            info: '/info',\n            user: '/user',\n            avatar: '/avatar',\n            productos: '/productos',\n            tienda: '/tienda',\n            carrito: '/carrito'\n        };\n        this.app = (0, express_1.default)();\n    }\n    start() {\n        return __awaiter(this, void 0, void 0, function* () {\n            loggerWinston_1.logger.info('Conectando la base de datos');\n            yield (0, conectDB_1.default)();\n            this.app.use(express_1.default.json());\n            this.app.use(express_1.default.urlencoded({ extended: true }));\n            this.app.use('/javascript', express_1.default.static(path_1.default.join(__dirname, 'public', 'javascript')));\n            this.app.use('/avatares', express_1.default.static(path_1.default.join(__dirname, 'public', 'avatares')));\n            this.app.use((0, express_fileupload_1.default)({\n                useTempFiles: true,\n                tempFileDir: '/tmp/',\n                createParentPath: false\n            }));\n            this.app.set('views', './views');\n            this.app.set('view engine', 'ejs');\n            this.app.use(this.paths.home, ruta_home_1.default);\n            this.app.use(this.paths.login, ruta_login_1.default);\n            this.app.use(this.paths.info, ruta_info_1.default);\n            this.app.use(this.paths.user, ruta_registro_1.default);\n            this.app.use(this.paths.avatar, ruta_avatar_1.default);\n            this.app.use(this.paths.productos, ruta_productos_1.default);\n            this.app.use(this.paths.tienda, ruta_tienda_1.default);\n            this.app.use(this.paths.carrito, ruta_carrito_1.default);\n            this.app.listen(this.port, () => {\n                console.log(`Servidor ejecutandose en el puerto ${this.port}`);\n            });\n        });\n    }\n}\nexports.Server = Server;\n\n\n//# sourceURL=webpack://express-session/./src/sever.ts?");

/***/ }),

/***/ "./src/verify/verifyCampo.ts":
/*!***********************************!*\
  !*** ./src/verify/verifyCampo.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.verificarCampoRequerido = void 0;\nconst http_status_codes_1 = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\nfunction verificarCampoRequerido(valor, mensaje) {\n    if (!valor) {\n        throw new WebError(mensaje, http_status_codes_1.StatusCodes.BAD_REQUEST);\n    }\n}\nexports.verificarCampoRequerido = verificarCampoRequerido;\n\n\n//# sourceURL=webpack://express-session/./src/verify/verifyCampo.ts?");

/***/ }),

/***/ "./src/verify/verifyToken.ts":
/*!***********************************!*\
  !*** ./src/verify/verifyToken.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.verifyTokenWithRedirect = exports.verifyToken = void 0;\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst http_status_codes_1 = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\nconst secret = process.env.SECRET;\nfunction verifyToken(req, res, next) {\n    var _a;\n    const token = (_a = req.headers.authorization) !== null && _a !== void 0 ? _a : req.query.token;\n    if (!token) {\n        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send('No se proporcionó un token de autenticación');\n        return;\n    }\n    try {\n        const decoded = jsonwebtoken_1.default.verify(token, secret);\n        req.token = decoded;\n        next();\n    }\n    catch (error) {\n        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send('Token de autenticación no válido');\n    }\n}\nexports.verifyToken = verifyToken;\nfunction verifyTokenWithRedirect(req, res, next) {\n    var _a;\n    const token = (_a = req.headers.authorization) !== null && _a !== void 0 ? _a : req.query.token;\n    if (!token) {\n        res.redirect('/sesion');\n        return;\n    }\n    try {\n        const decoded = jsonwebtoken_1.default.verify(token, secret);\n        req.token = decoded;\n        next();\n    }\n    catch (error) {\n        res.redirect(http_status_codes_1.StatusCodes.UNAUTHORIZED, '/sesion');\n    }\n}\nexports.verifyTokenWithRedirect = verifyTokenWithRedirect;\n\n\n//# sourceURL=webpack://express-session/./src/verify/verifyToken.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cluster");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;