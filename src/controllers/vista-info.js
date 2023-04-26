const { request, response } = require('express');
const {fork} = require('child_process');

const vistaInfo = (req, res = response) => {
    
    const serverInfo = 
    {
        path: process.cwd(),
        plataforma: process.platform,
        pid: process.pid,
        version: process.version,
        carpeta: process.title,
        memoria: process.memoryUsage.rss()
    }

    const dataNucleos = fork('./child/cpus.js')
    dataNucleos.send('start');
    dataNucleos.on('message', numNucleos => {
    
        res.render('mostrar-info', {
            info: serverInfo,
            numNucleos
        });
    })
}
module.exports = {
    vistaInfo
}