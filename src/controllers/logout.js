
const { request, response } = require("express")


const logout = (req = request, res = response) => {
    
    const { name } = req.secret
    res.render('mensaje', { mensaje: `Hasta luego ${name}` })

}
module.exports = {
    logout
}