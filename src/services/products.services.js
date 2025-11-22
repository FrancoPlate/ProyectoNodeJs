import {
  getProductos,
  getProductById,
  postProductos,
  deleteProductById

} from "../models/products.models.js"

export const getAllProductsService = async () => {
  return(
    new Promise (async(res,rej) => {
      console.log("testeo del getAllProductos del servicio")
      try{
        const products = await getProductos()
        res(products);
      }catch(error){
        rej(error)
      }
    })
  )
};

export const getProductByIdService = async (id) => {
    return(
      new Promise(async(res,rej) =>{
        console.log("testeo del getProductById del servicio")
        try{
          const product = await getProductById(id)
          res(product)
        }catch(error){
          rej(error)
        }
      })
    )
};

export const postProductService = async (product) => {
  return(
    new Promise(async(res,rej) => {
      console.log("testeo del postProductService del servicio")
      try{
        const products = await postProductos(product)
        console.log(`Producto agregado : ${product}, Productos actualizados : ${products}`)
        res()
      }catch (error){
        rej(error)
      }
    })
  )
}

export const deleteProductByIdService = async (id) =>{
  return(
    new Promise(async(res,rej) =>{
      console.log("testeo del deleteProductById del servicio")
      try{
        const ok = await deleteProductById(id)
        res(ok)
      }catch(error){
        rej(error)
      }
    })
  )
}