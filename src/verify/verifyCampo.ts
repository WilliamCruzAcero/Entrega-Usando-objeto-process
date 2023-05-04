import { StatusCodes } from 'http-status-codes';
import { WebError } from '../models/webError';


export function verificarCampoRequerido(valor, mensaje) {
    if (!valor) {
        throw new WebError(mensaje, StatusCodes.BAD_REQUEST)
    }
}