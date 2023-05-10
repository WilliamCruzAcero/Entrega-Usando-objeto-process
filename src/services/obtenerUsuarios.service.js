const { User } = require('../models/mongo.usuario');

const obtenerUsuarios = async () => await User.find();

module.exports = {
    obtenerUsuarios
}
