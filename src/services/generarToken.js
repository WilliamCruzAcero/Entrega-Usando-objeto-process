const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const createJWTToken = ({user}) => {
    return jwt.sign({user}, secret, { 
        expiresIn: '1h'
    })
    
}

module.exports = {
    createJWTToken
}