const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { User } = require("../models/mongo.usuario");
const WebError = require("../models/webError");
const { StatusCodes } = require('http-status-codes');



const iniciarSesion = async ( email, password, name ) => {

    const secret = process.env.SECRET;
    const user = await User.findOne(email, password, name);
    
    if (!user.email) {
        throw new WebError('El email de usuario es requerido', StatusCodes.BAD_REQUEST)
    }

    if (!user.password) {
        throw new WebError('La contraseña es requerida', StatusCodes.BAD_REQUEST)
    }

    if (!user?.email) {
        throw new WebError('El usuario no esta registrado', StatusCodes.UNAUTHORIZED);
    }

    // const hashedPassword = user.password;
    // const isCorrectPassword = await bcrypt.compare(password, hashedPassword)

    // if (!isCorrectPassword) {
    //     throw new WebError('El nombre de usuario o contraseña es incorrecta',  StatusCodes.UNAUTHORIZED);
    // }

    const tokenBody = {
        email: user.email,
        name: user.name,
    
    }
    console.log(tokenBody)
    const token = jwt.sign(tokenBody, secret, { expiresIn: '1h' });
    console.log(token)
    return token

}

module.exports = {
    iniciarSesion
}
