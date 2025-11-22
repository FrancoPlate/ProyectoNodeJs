import { generateToken } from "../data/tokent.js";

export  const login  = async (req,res) => {
    //obtenemos el email y el password por la consulta
    const {email,password} = req.body;
    
    //verificamos si el usuario es correcto y generamos el token
    if (email === "test@gmail.com" && password === "123456"){
        const user = {email:email,id: "123"};
        const token = await generateToken(user);
        res.json({token})
    }else{
        console.warn("no")
        res.sendStatus(401);
    }
}