import express from "express"
import cors from "cors"
//import bodyParser from "body-parse"
import productosRouter from "./src/routes/products.routes.js"
import rutasLogin from "./src/routes/auth.routes.js"
import { authentication } from "./src/data/authentication.js"

const app = express();
const PORT = process.env.PORT || 3000;


//middlewere
const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig))
//app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", rutasLogin)
app.use("/api", authentication, productosRouter)

// middlewere de redireccionamiento para cuando no se encuentra el recurso
app.use((req,res,next) => {
    res.status(404).send(`Recurso no encontrado o invalido`)
})


// imprime donde se corre el servidor
app.listen(PORT, () =>{
    console.info(`Servidor corriendo en http://localhost:${PORT}`)
})