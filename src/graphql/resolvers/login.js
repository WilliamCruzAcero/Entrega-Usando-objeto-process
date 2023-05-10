const { iniciarSesion } = require("../../services/iniciarSesion")

const login = async () => {

    const user = await iniciarSesion()
    return user
}

module.exports = {
    login
}