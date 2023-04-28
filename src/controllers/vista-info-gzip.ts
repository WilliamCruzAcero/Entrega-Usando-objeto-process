import { Request, Response } from 'express';
import {fork} from 'child_process';

export const vistaInfoGzip = ( res: Response ) => {

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