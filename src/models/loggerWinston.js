const winston = require('winston');

const loggerDev = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({level: "info"}),
    ],
});

const loggerProd = winston.createLogger({
    level: "warn",
    transports: [
        new winston.transports.File({filename: "warn.log", level: "warn"}),
        new winston.transports.Console({level: "warn"}),
        new winston.transports.File({filename: "error.log", level: "error"}),
        new winston.transports.Console({level: "error"})
    ]
})


const NODE_ENV = process.env.NODE_ENV || 'development'
const logger = NODE_ENV === 'production'
            ? loggerProd
            : loggerDev;

module.exports = {
    logger

} 