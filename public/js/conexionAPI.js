async function listarCuadros(){
    const conexion= await fetch("http://localhost:3001/cuadros");
    const conexionConvertida=conexion.json();
    //console.log(conexionConvertida);

    return conexionConvertida;
};

//Aquí debemos indicar el método y qué tipo de archivo se estará enviando
//eso en headers, y en body, el cuerpo del mensaje
async function enviarCuadro(titulo, tecnica, imagen){
    const conexion = await fetch("http://localhost:3001/cuadros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            tecnica:tecnica,
            imagen:imagen
        })
    })
    const conexionConvertida=conexion.json();
    
    return conexionConvertida;
};

const borrarCuadro = async (id) => {
    try{
        const res= await fetch(`http://localhost:3001/cuadros/${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}
/*async function borrarCuadro(id){
    return await fetch(`http://localhost:3001/cuadros/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .catch((err) => console.log(err));
};*/

export const conexionApi={
    listarCuadros,
    enviarCuadro,
    borrarCuadro
}

//listarCuadros();