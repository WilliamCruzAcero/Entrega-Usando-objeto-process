import { StatusCodes } from 'http-status-codes';


export function verificarCampoRequerido(valor, mensaje) {
    if (!valor) {
        throw new WebError(mensaje, StatusCodes.BAD_REQUEST)
    }
}