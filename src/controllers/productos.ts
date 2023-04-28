import { Request, Response} from 'express';
import { usuarioModel } from '../models/modelUsuario';
import { Token } from '../models/token';


export const productos = async (req: Request & {token: Token}, res: Response) => {

    const { email, name, lastname } = req.token
    const user = await usuarioModel.findOne({ email });

    res.render('formulario-productos', {
        productos: user.productos,
        usuario: {
            nombre: name,
            apellido: lastname,
            email
        }
    });
};
