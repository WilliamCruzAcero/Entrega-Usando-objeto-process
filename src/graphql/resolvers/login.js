const { createJWTToken } = require("../../services/generarToken")
const { iniciarSesion } = require("../../services/iniciarSesion,js")

const login = async () => {

    const token = createJWTToken()

    const login = iniciarSesion(token)

    return login

}

module.exports = {
    login
}