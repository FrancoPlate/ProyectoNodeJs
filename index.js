
async function ObtenerDatos(id){
    try{
        
        const response = await fetch('https://fakestoreapi.com/' + id);
        const dato = await response.json();
        console.log (dato);
    }catch(error){
        console.log("Error: "+ error);
    }
    
}


async function AgregarProducto(t,p,c) {

    const product = {
        title:t,
        price:p,
        category:c,
    }

    const config = {
        "method": "POST",
        "headers": {
            'Content-Type' : 'application/json'
        },
        "body": JSON.stringify(product)
    }

    try{
        fetch('https://fakestoreapi.com/products', config)
        .then(response => response.json())
        .then(data => console.log(data));
    }catch(error){
        console.log(error)
    }
    
}

async function EliminarDato(id){
    try{
        
        const response = await fetch('https://fakestoreapi.com/' + id, {method:'DELETE'});
        const dato = await response.json();
        console.log (dato);
    }catch(error){
        console.log("Error: "+ error);
    }
    
}




const args = process.argv.slice(2);
if(args[0] === "GET"){

    if(args[1] === "products"){
        ObtenerDatos(args[1]);
    }else{
        ObtenerDatos(args[1]);
    }

}else if(args[0] === "POST"){

    AgregarProducto(args[2],args[3],args[4])

}else if(args[0] === "DELETE"){
    EliminarDato(args[1])
}else{
    console.loog("Solo se aceptan los argumentos {GET} - {POST (title, price, category)}  - {DELETE id}");
}