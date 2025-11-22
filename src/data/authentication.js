import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secret_key= process.env.JWT_SECRET_KEY

// Middleware para verificar el token JWT
export const authentication = (req,res,next) =>{
    //obtenemos el token del header "authorizacion", se separa la cadena de texto y se toma el valor de la posicion [1]
    const token = req.headers['authorization'].split(" ")[1];

    //se verifica si existe el token o que ha venido en el formato valido de caso contrario devolvera 
    // status 401 "Unauthorized"
    if (!token) return res.sendStatus(401);

    //se verifica que el token, si arroja algun error significa que el token no  es valido 
    // se retorna un status 403 "Forbidden"
    jwt.verify(token,secret_key,(err) =>{
        if(err) return res.sendStatus(403);
        next();
    })
}