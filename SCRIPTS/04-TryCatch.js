let jsonString='{"name":"Fernando","age": 48}';
try {
    let user= JSON.parse(jsonString);
    console.log(user)
//intentar convertir la cadena json a un objeto
}catch(error){
// si ocurre un error en a,l ejecucion de json.parse, lo capturamos aqui
console.error("Error a procesar el JSON:" , error.message);
};                   