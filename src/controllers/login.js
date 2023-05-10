const { request, response} = require('express'); 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const WebError = require('../models/webError');
const { StatusCodes } = require('http-status-codes');
const { User } = require('../models/mongo.usuario');
const { logger } = require('../models/loggerWinston');


const secret = process.env.SECRET;

const login = async (req = request, res = response) => {

    const { email, password } = req.body;
    let user;

    try {
        if (!email) {
            throw new WebError('El email de usuario es requerido', StatusCodes.BAD_REQUEST)
        }

        if (!password) {
            throw new WebError('La contraseña es requerida', StatusCodes.BAD_REQUEST)
        }

        user = await User.findOne({ email });

        if (!user?.email) {
            throw new WebError('El usuario no esta registrado', StatusCodes.UNAUTHORIZED);
        }

        const hashedPassword = user.password;
        const isCorrectPassword = await bcrypt.compare(password, hashedPassword)

        if (!isCorrectPassword) {
            throw new WebError('El nombre de usuario o contraseña es incorrecta',  StatusCodes.UNAUTHORIZED);
        }

    } catch (error) {
        const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
        logger.log('error', error.message)
        return res.status(status).json({
            error: error.message
        })           
    }

    const tokenBody = {
        email: user.email,
        name: user.name,
    }

    const token = jwt.sign(tokenBody, secret, { expiresIn: '1h' });
    
  
    res.json({ token });

}
module.exports = {
    login
}