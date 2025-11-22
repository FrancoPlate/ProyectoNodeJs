//clase 12
import {
    getAllProductsService,
    getProductByIdService,
    postProductService,
    deleteProductByIdService
} from "../services/products.services.js"

export const getAllProductsControllers = async (req,res) => {
    try{
        console.log("paso1")
        const products = await getAllProductsService();
        console.log(products)
        res.status(200).json(products);
    }catch(error){
        res.status(500)
    }
}

export const getProductByIdControllers = async (req,res) => {
    try{
        const id = req.params.id
        if(id){
            const product = await getProductByIdService(id);
            if(product){
                res.status(200).json(product)
            }else{
                res.status(404).json({message:`Producto no encontrado`})
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500)
    }
    
}

export const postProductsControllers = async (req,res) => {
    console.log("post de controller")
    const {
        categoria = "none",
        descripcion = "none",
        nombre = "none",
        precio = 0,
        stock = 0
    } = req.body;

    const producto = {
        categoria,
        descripcion,
        nombre,
        precio,
        stock
    };
    //console.log(producto)

    try{
        const ok = await postProductService(producto)
        res.status(200).json({
            status: `ok`
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            status: "error",
            producto: error.message
        });
    }
}

export const deleteproductControllers = async (req,res) =>{
    try{
        const id = req.params.id
        if(id){
            const eliminado = await deleteProductByIdService(id);
            if(eliminado){
                res.status(200).json({
                    eliminado,
                    message:`Producto Eliminado`
                })
            }else{
                res.status(404).json({message:`Producto no encontrado`})
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        console.log(error)
        res.status(500)
    }
}