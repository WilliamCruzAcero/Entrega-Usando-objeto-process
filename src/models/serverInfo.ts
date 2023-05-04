import dotenv from 'dotenv';
dotenv.config();
import {fork} from'child_process';


export function info() {

    const serverInfo = {
        path: process.cwd(),
        plataforma: process.platform,
        pid: process.pid,
        version: process.version,
        carpeta: process.title,
        memoria: process.memoryUsage.rss()
    }
    
    const dataNucleos = fork('../child/fork.js')
    dataNucleos.send('start');
    dataNucleos.on('message', msg => {
    
        let numNucleos = msg;
        
        
        return serverInfo ;
               numNucleos

    })
}



