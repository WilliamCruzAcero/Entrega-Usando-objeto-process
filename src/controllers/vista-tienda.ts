import { Request, Response } from 'express';
import { Token } from '../models/token';
import { usuarioModel } from '../models/modelUsuario';

export const tienda = async (req: Request & {token: Token}, res: Response) => {

    const { email, name, lastname } = req.token
    const user = await usuarioModel.findOne({email});

    res.render('tienda', {
        productos: user.productos,
        usuario: {
            nombre: name,
            apellido: lastname,
            email
        }
    })
} 