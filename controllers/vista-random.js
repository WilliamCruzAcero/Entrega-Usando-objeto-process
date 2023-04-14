const { request, response } = require('express');
const {fork} = require('child_process');


const vistaRandom = (req, res = response) => {

    const dataRandom = fork('./child/random.js')
    dataRandom.send('start');
    dataRandom.on('message', msg => {

        let random = msg
        res.render('mostrar-random', {
            random
        });
    })
}
module.exports = {
    vistaRandom
}
